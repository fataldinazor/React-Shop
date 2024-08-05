import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import productBg from "../assets/productBg.jpg";
import { CartContext } from "../context/cartContext";

export function productDetailLoader({ params }) {
  return getProduct(params.id);
}

async function getProduct(id) {
  try {
    const fetchData = await fetch(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
    if (!fetchData.ok) {
      throw new Error(`HTTP error! Status: ${fetchData.status}`);
    }
    const data = await fetchData.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch products: ${error.message}`);
  }
}

export default function ProductDetail() {
  const product = useLoaderData();
  const [mainImage, setMainImage] = useState(product.images[0]);
  const {
    increaseProductQuantity,
    reduceProductQuantity,
    getItemQty,
    removeItem,
    addNewProductToCart,
    isItemPresent,
  } = useContext(CartContext);

  return (
    <div
      className="bg-cover bg-no-repeat h-full flex items-center"
      style={{ backgroundImage: `url(${productBg})` }}
    >
      <div className="product-container max-w-5xl flex-grow-0 mx-auto p-6 bg-black text-white rounded-lg shadow-md animate-fadeIn">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex">
            <div className="flex flex-col space-y-2 mr-4 justify-center">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.title} ${index + 1}`}
                  className={`w-20 h-20 object-cover cursor-pointer rounded-md transition-transform transform hover:scale-110 ${
                    mainImage === image ? "border-2 border-purple-700" : ""
                  }`}
                  onClick={() => setMainImage(image)}
                />
              ))}
            </div>
            <div className="flex justify-center items-center ">
              <img
                src={mainImage}
                alt={product.title}
                className="object-cover max-h-96 rounded-lg animate-fadeIn"
              />
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
              <p className="text-gray-300 mb-4">{product.description}</p>
              <div className="text-xl font-bold mt-2 bg-purple-950 px-5 py-1 b rounded-full inline-block animate-fadeIn">
                Price: ${product.price}
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-2 mt-4">
                {isItemPresent(product) ? (
                  <div className="item-qty flex items-center justify-center py-2">
                    <button
                      onClick={() =>
                        getItemQty(product) > 1
                          ? reduceProductQuantity(product)
                          : removeItem(product)
                      }
                      className="text-xl text-red-500 hover:text-red-700 px-2 transition-transform transform hover:scale-125"
                    >
                      −
                    </button>
                    <div className="border-l h-5 mx-2 "></div>
                    <span className="text-sm font-bold text-center px-2">
                      {getItemQty(product)}
                    </span>
                    <div className="border-r h-5 mx-2"></div>
                    <button
                      onClick={() => increaseProductQuantity(product)}
                      className="text-xl text-green-500 hover:text-green-700 px-2 transition-transform transform hover:scale-125"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => addNewProductToCart(product)}
                    className="bg-purple-600 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded transition-transform transform hover:scale-105"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
