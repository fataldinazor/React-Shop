import { Form, Link, useLoaderData, useSubmit } from "react-router-dom";
import { truncate, truncateTitle } from "../../utils";
import sortBy from "sort-by";
import { matchSorter } from "match-sorter";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/cartContext";

export const shopLoader = async ({ request }) => {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const products = await getShop(q);
  return { products, q };
};

const getShop = async (query) => {
  const fetchData = await fetch("https://api.escuelajs.co/api/v1/products");
  let data = await fetchData.json();
  console.log(data);

  if (query) {
    data = matchSorter(data, query, { keys: ["title"] });
  }
  return data.sort(sortBy("id"));
};

function Shop() {
  const { products, q } = useLoaderData();
  const {
    cartItems,
    addNewProductToCart,
    increaseProductQuantity,
    reduceProductQuantity,
    getItemQty,
    removeItem,
    isItemPresent,
  } = useContext(CartContext);
  const [filteredItems, setFilteredItems] = useState(products);
  const [filter, setFilter] = useState("All");
  const submit = useSubmit();

  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]);

  useEffect(() => {
    if (filter === "All") {
      setFilteredItems(products);
    } else {
      setFilteredItems(
        products.filter((product) => product.category.name === filter)
      );
    }
  }, [filter, products]);

  function getCategoryChange(event) {
    setFilter(event.target.value);
  }

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center bg-[url(./assets/productsBg1.jpg)] bg-cover bg-no-repeat bg-fixed">
      <div className="bg-black min-h-screen flex justify-center w-full bg-opacity-30">
        <div className="w-3/4 py-6">
          <div className="mb-6 flex justify-between">
            <div className="w-2/3">
              <Form id="search-form" role="search">
                <input
                  className="flex-grow w-full p-3 border border-purple-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-700 bg-black text-white"
                  id="q"
                  type="search"
                  name="q"
                  placeholder="Search Product"
                  defaultValue={q}
                  onChange={(event) => {
                    const isFirstSearch = q == null;
                    submit(event.currentTarget.form, {
                      replace: !isFirstSearch,
                    });
                  }}
                />
              </Form>
            </div>
            <div className="flex content-center bg-indigo-950 rounded-lg px-4 text-white w-fit border-2 border-black">
              <div className="content-center text-bold">Categories:</div>
              <select
                className="bg-indigo-950 ml-2 outline-none"
                name="category"
                onChange={getCategoryChange}
                value={filter}
              >
                <option value="All">All</option>
                <option value="Shoes">Shoes</option>
                <option value="Electronics">Electronics</option>
                <option value="Furniture">Furniture</option>
                <option value="Clothing">Clothing</option>
              </select>
            </div>
          </div>
          {filteredItems.length > 0 ? (
            <div className="grid auto-rows-fr grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-6 gap-y-8">
              {console.log(cartItems)}
              {filteredItems.map((product) => (
                <div
                  key={product.id}
                  className="card bg-black shadow-lg rounded-lg overflow-hidden text-white flex flex-col animate-fadeIn"
                >
                  <img
                    className="w-full h-64 object-cover hover:scale-105 transform transition-transform duration-300"
                    src={product.images[0]}
                    alt={truncateTitle(product.title)}
                  />
                  <div className="p-4 flex flex-col flex-grow">
                    <Link
                      to={`/shop/${product.id}`}
                      className="text-lg font-semibold mb-2 cursor-default hover:underline underline-offset-2 hover:cursor-pointer visited:text-purple-400"
                    >
                      {truncateTitle(product.title)}
                    </Link>
                    <p className="text-gray-500 text-sm mb-3 flex-grow">
                      {truncate(product.description)}
                      <Link
                        to={`/shop/${product.id}`}
                        className="text-blue-600"
                      >
                        Read more
                      </Link>
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xl font-bold">
                        ${product.price}
                      </span>
                      <div className="flex items-center space-x-2 h-8">
                        {isItemPresent(product) ? (
                          <div className="item-qty flex items-center justify-center">
                            <button
                              onClick={() =>
                                getItemQty(product) > 1
                                  ? reduceProductQuantity(product)
                                  : removeItem(product)
                              }
                              className="text-xl text-red-500 hover:text-red-700 px-2"
                            >
                              −
                            </button>
                            <div className="border-l h-5 mx-2 "></div>
                            <span className="text-sm font-semibold text-center px-2">
                              {getItemQty(product)}
                            </span>
                            <div className="border-r h-5 mx-2"></div>
                            <button
                              onClick={() => increaseProductQuantity(product)}
                              className="text-xl text-green-500 hover:text-green-700 px-2"
                            >
                              +
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => addNewProductToCart(product)}
                            className="bg-violet-900 hover:bg-violet-600 text-white font-bold py-1 px-3 rounded-full transition-transform duration-300 transform hover:scale-110"
                          >
                            Add to Cart
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-white w-full flex justify-center bg-black px-4 py-2 rounded-lg bg-opacity-70">
              <div>No products available in this category</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Shop;
