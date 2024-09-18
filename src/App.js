import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./ProductList";
import LiveChat from "./LiveChat";
import VideoPlayer from "./VideoPlayer";
import CartIndicator from "./CartIndicator";
import io from "socket.io-client";
import Footer from "./Footer";

axios.defaults.withCredentials = true;

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [checkoutUrl, setCheckoutUrl] = useState("");
  const [socket, setSocket] = useState(null);

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

    const newSocket = io("http://localhost:3000");
    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);

  const addToCart = async (variantId, quantity) => {
    try {
      const response = await axios.post("http://localhost:3000/add-to-cart", {
        variantId,
        quantity,
      });

      setCart(response.data.checkout.lineItems || []);
      alert("Producto añadido al carrito");
    } catch (error) {
      console.error("Error al agregar al carrito:", error.message);
    }
  };

  const proceedToCheckout = async () => {
    try {
      const response = await axios.get("http://localhost:3000/checkout");

      if (response.data.webUrl) {
        setCheckoutUrl(response.data.webUrl);
      } else {
        console.error("No se recibió la URL del checkout");
        alert("No se pudo proceder al checkout");
      }
    } catch (error) {
      console.error("Error al proceder al checkout:", error.message);
    }
  };

  return (
    
      <div className="bg-gradient-to-br from-gray-100 to-blue-100 min-h-screen flex flex-col">
        <header className="bg-blue-600 text-white p-4 text-center relative">
          <h1 className="text-3xl font-bold">Shopify Live Commerce</h1>
          <div className="absolute top-0 right-0 m-4">
            <CartIndicator cart={cart} checkoutUrl={checkoutUrl} proceedToCheckout={proceedToCheckout} />
          </div>
        </header>
    
        <div className="flex-grow flex justify-center">
          <main className="w-full max-w-7xl p-4 lg:p-6">
            <div className="flex flex-col lg:flex-row lg:gap-8 gap-4 mb-8 lg:mb-12">
              <div className="w-full sm:w-auto sm:h-auto lg:w-2/3 xl:w-3/5">
                <div className="aspect-w-16 aspect-h-9">
                  <VideoPlayer />
                </div>
              </div>
              <div className="w-full lg:w-1/3 xl:w-2/5  lg:h-auto xl:h-auto">
                {socket && <LiveChat socket={socket} />}
              </div>
            </div>
            <div className=" sm:mt-8 md:mt-12">
            <ProductList products={products} addToCart={addToCart} />
            </div>
          </main>
        </div>
    
        <Footer />
      </div>
    );
    
  
}

export default App;
