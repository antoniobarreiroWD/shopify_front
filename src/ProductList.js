import React from "react";

function ProductList({ products, addToCart }) {
  return (
    <div className=" p-6 rounded-lg ">
  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-black p-6 rounded-lg shadow-md">
            {product.images && product.images.length > 0 && (
              <img
                src={product.images[0].src}
                alt={product.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            )}
            <h3 className="text-lg font-semibold text-white">{product.title}</h3>
            <p className="text-gray-200 mt-2">Precio: {product.variants[0].price} Euros</p>
            <button
  className="mt-4 bg-sky-blue text-white px-4 py-2 rounded hover:bg-secondary-blue"
  onClick={() => addToCart(product.variants[0].id, 1, product)}
>
  Añadir al carrito
</button>

            </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

