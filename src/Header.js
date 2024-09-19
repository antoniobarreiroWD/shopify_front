import React from "react";
import CartIndicator from "./CartIndicator";

function Header({ cart, checkoutUrl, proceedToCheckout, updateCart }) {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="flex items-center justify-between flex-wrap">
        <h1 className="text-2xl sm:text-3xl font-bold">Shopify Live Commerce</h1>
        <div className="top-4 right-4 fixed z-10">
          <CartIndicator
            cart={cart}
            checkoutUrl={checkoutUrl}
            proceedToCheckout={proceedToCheckout}
            updateCart={updateCart}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
