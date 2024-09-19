import React, { useState } from "react";

function CartIndicator({ cart, checkoutUrl, proceedToCheckout, updateCart }) {
  const [isOpen, setIsOpen] = useState(false);

  const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

  
  const decreaseQuantity = (variantId) => {
    const updatedCart = cart
      .map((item) => {
        if (item.variantId === variantId && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);

    sessionStorage.setItem("cart", JSON.stringify(updatedCart));
    updateCart(updatedCart);
  };

  
  const increaseQuantity = (variantId) => {
    const updatedCart = cart.map((item) => {
      if (item.variantId === variantId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    sessionStorage.setItem("cart", JSON.stringify(updatedCart));
    updateCart(updatedCart);
  };

  
  const removeFromCart = (variantId) => {
    const updatedCart = cart.filter((item) => item.variantId !== variantId);
    sessionStorage.setItem("cart", JSON.stringify(updatedCart));
    updateCart(updatedCart);
  };

  
  

  return (
    <div className="relative inline-block">
      <div className="relative cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <span className="bg-red-500 text-white rounded-full px-2 py-1 text-sm">
          {totalItemsInCart}
        </span>
        <span className="ml-2">🛒</span>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg z-10 p-4">
          <h2 className="text-xl font-semibold">Carrito</h2>
          {cart.length > 0 ? (
            <>
              <ul className="mt-4 space-y-2 max-h-40 overflow-y-auto">
                {cart.map((item, index) => (
                  <li key={index} className="bg-off-white p-4 rounded shadow text-black">
                    {item.title} - Cantidad: {item.quantity}
                    <div className="flex justify-between mt-2">
                      <button
                        className="bg-blue-500 text-white px-2 py-1 rounded"
                        onClick={() => increaseQuantity(item.variantId)}
                      >
                        +1
                      </button>

                      {item.quantity > 1 && (
                        <button
                          className="bg-blue-500 text-white px-2 py-1 rounded"
                          onClick={() => decreaseQuantity(item.variantId)}
                        >
                          -1
                        </button>
                      )}

                      <button
                        className="bg-red-500 text-white px-2 py-1 rounded"
                        onClick={() => removeFromCart(item.variantId)}
                      >
                        Eliminar
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              {checkoutUrl && (
                <div className="mt-4">
                  <a
                    href={checkoutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary-blue text-white px-4 py-2 rounded block text-center"
                  >
                    Haz click para ir a la página de pago
                  </a>
                </div>
              )}

              <button
                onClick={proceedToCheckout}
                className="bg-green-500 text-white px-4 py-2 mt-4 rounded block w-full"
              >
                Pagar
              </button>
            </>
          ) : (
            <p className="text-gray-600">El carrito está vacío</p>
          )}
        </div>
      )}
    </div>
  );
}

export default CartIndicator;


