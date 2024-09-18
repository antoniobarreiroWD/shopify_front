import React, { useState } from "react";

function CartIndicator({ cart, checkoutUrl, proceedToCheckout }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <div className="relative cursor-pointer" onClick={toggleCart}>
        <span className="bg-red-500 text-white rounded-full px-2 py-1 text-sm">
          {cart.reduce((total, item) => total + item.node.quantity, 0)}
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
                    {item.node.title} - Cantidad: {item.node.quantity}
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
