import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./ProductList";
import LiveChat from "./LiveChat";
import VideoPlayer from "./VideoPlayer";
import io from "socket.io-client";
import Footer from "./Footer";
import Header from "./Header"; 

axios.defaults.withCredentials = true;

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [checkoutUrl] = useState("");
  const [socket, setSocket] = useState(null);
  const [showProducts, setShowProducts] = useState(false);
  const [showLiveChat, setShowLiveChat] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error al obtener productos:", error.message);
      }
    };

    fetchProducts();

    const storedCart = JSON.parse(sessionStorage.getItem("cart")) || [];
    setCart(storedCart); 

    const newSocket = io("http://localhost:3000");
    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);

  const addToCart = (variantId, quantity, product) => {
    const currentCart = JSON.parse(sessionStorage.getItem("cart")) || [];
    const existingItemIndex = currentCart.findIndex(item => item.variantId === variantId);

    if (existingItemIndex !== -1) {
      currentCart[existingItemIndex].quantity += quantity;
    } else {
      currentCart.push({ variantId, quantity, title: product.title, price: product.variants[0].price });
    }

    sessionStorage.setItem("cart", JSON.stringify(currentCart));
    setCart(currentCart); 
    
  };

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
  };

  const proceedToCheckout = async () => {
    try {
      const cartItems = JSON.parse(sessionStorage.getItem("cart") || "[]");
      console.log("Items del carrito enviados:", cartItems);
      const response = await axios.post("http://localhost:3000/checkout", {
        items: cartItems, 
      });

      if (response.data.webUrl) {
        window.location.href = response.data.webUrl; 
      } else {
        console.error("No se recibió la URL del checkout");
        alert("No se pudo proceder al checkout");
      }
    } catch (error) {
      console.error("Error al proceder al checkout:", error.message);
      if (error.response) {
        console.error("Detalles del error HTTP:", error.response.data);
      }
    }
  };

  const toggleProductList = () => {
    setShowProducts(!showProducts);
  };

  const toggleLiveChat = () => {
    setShowLiveChat(!showLiveChat);
  };

  const videoContainerClass = `relative w-full ${
    showLiveChat || showProducts ? "lg:w-2/3 xl:w-3/5" : "lg:w-full"
  }`;
  const mainClass = `${
    !showLiveChat && !showProducts ? "flex items-center justify-center" : ""
  }`;

  return (
    <div className="bg-gradient-to-br from-gray-100 to-blue-400 min-h-screen flex flex-col font-sans">
      <Header
        cart={cart}
        checkoutUrl={checkoutUrl}
        proceedToCheckout={proceedToCheckout}
        updateCart={updateCart}
      />
      <div className={`flex-grow flex justify-center ${mainClass}`}>
        <main className="w-full max-w-7xl p-4 lg:p-6">
          <div className="flex flex-col lg:flex-row lg:gap-8 gap-4 mb-8 lg:mb-12">
            <div className={videoContainerClass}>
              <VideoPlayer toggleProductList={toggleProductList} toggleLiveChat={toggleLiveChat} />
            </div>

            {showLiveChat && (
              <div className="w-full lg:w-1/3 xl:w-2/5 lg:h-auto xl:h-auto">
                {socket && <LiveChat socket={socket} />}
              </div>
            )}
          </div>

          {showProducts && (
            <div className="sm:mt-8 md:mt-12">
              <ProductList products={products} addToCart={addToCart} />
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;

