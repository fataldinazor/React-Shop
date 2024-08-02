import {
  useOutletContext,
  Form,
  Link,
  useLoaderData,
  useSubmit,
} from "react-router-dom";
import { truncate, truncateTitle } from "../../utils";
import sortBy from "sort-by";
import { matchSorter } from "match-sorter";
import { useEffect } from "react";

export const shopLoader = async ({ request }) => {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");

  const products = await getShop(q);
  return {products, q};
};

const getShop = async (query) => {
  const fetchData = await fetch("https://api.escuelajs.co/api/v1/products");
  let data = await fetchData.json();
  // const includedItems = Array.from({ length: 38 }, (_, i) => i + 13);
  // data = data.filter((product)=>includedItems.includes(product.id));
  console.log(data);

  if (query) {
    data = matchSorter(data, query, { keys: ["title"] });
  }
  return data.sort(sortBy("id"));
};

function Shop() {
  const {products, q}= useLoaderData();
  const [cartItems, setCartItems] = useOutletContext();
  const submit = useSubmit();

  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]);

  function increaseProductQuantity(product) {
    const index = cartItems.findIndex((item) => item.id === product.id);
    const updatedCartItems = [...cartItems];

    updatedCartItems[index] = {
      ...updatedCartItems[index],
      value: updatedCartItems[index].value + 1,
    };
    setCartItems(updatedCartItems);
  }

  function reduceProductQuantity(product) {
    const index = cartItems.findIndex((item) => item.id === product.id);
    const value = cartItems[index].value;
    const updatedCartItems = [...cartItems];
    if (value > 1)
      updatedCartItems[index] = {
        ...updatedCartItems[index],
        value: updatedCartItems[index].value - 1,
      };
    setCartItems(updatedCartItems);
  }

  function addNewProductToCart(product) {
    const newProduct = { id: product.id, product, value: 1 };
    setCartItems((prevItems) => [...prevItems, newProduct]);
  }

  function isItemPresent(product) {
    const index = cartItems.findIndex((item) => item.id === product.id);
    if (index > -1) return true;
    else return false;
  }

  function getItemQty(product) {
    const index = cartItems.findIndex((item) => item.id === product.id);
    console.log(index);
    const qty = cartItems[index].value;
    return qty;
  }

  const removeItem = (product) => {
    const updatedArray = [...cartItems];
    const index = updatedArray.findIndex((item) => item.id === product.id);
    updatedArray.splice(index, 1);
    setCartItems(updatedArray);
  };

  function getCategoryChange(category){
    
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center bg-[url(./assets/productsBg1.jpg)] bg-cover bg-no-repeat bg-fixed">
      <div className="w-3/4">
        <div className="mb-6 flex">
          <Form id="search-form" role="search" className="w-2/3">
            <input
              className="w-full p-3 border border-purple-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-700 bg-black text-white"
              id="q"
              type="search"
              name="q"
              placeholder="Search..."
              defaultValue={q}
              onChange={(event) => {
                const isFirstSearch=q==null;
                submit(event.currentTarget.form,{
                  replace: !isFirstSearch,
                });
              }}
            />
          </Form>
          <div className="w-1/3 content-center">
            <select name="category" onChange={()=>getCategoryChange()}>
              <option>All</option>
              <option value="Clothes">Clothing</option>
              <option value="Electronics">Electronics</option>
              <option value="Furniture">Furniture</option>
              <option value="Miscellaneous">Miscellaneous</option>
            </select>
          </div>
        </div>

        <div className="grid auto-rows-fr grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {console.log(cartItems)}
          {products.map((product) => (
            <div
              key={product.id}
              className=" card bg-black shadow-lg rounded-lg overflow-hidden text-white"
            >
              <img
                className="w-full h-r8 object-cover"
                src={product.images[0]}
                alt={truncateTitle(product.title)}
              />
              <div className="p-4 grid auto-rows-fr content-between">
                <Link
                  to={`/shop/${product.id}`}
                  className="text-lg font-semibold mb-2 cursor-default hover:underline underline-offset-2 hover:cursor-pointer visited:text-purple-400"
                >
                  {truncateTitle(product.title)}
                </Link>
                <p
                  className="text-gray-500 text-sm mb-3"
                  style={{ minHeight: "3em" }}
                >
                  {truncate(product.description)}
                  {
                    <Link to={`/shop/${product.id}`} className="text-blue-600">
                      Read more
                    </Link>
                  }
                </p>
                <div className="flex items-center justify-between h-fit">
                  <span className="text-xl font-bold">${product.price}</span>
                  <div className="flex items-center space-x-2">
                    {isItemPresent(product) ? (
                      <div className="item-qty flex items-center justify-center">
                        <button
                          onClick={() => getItemQty(product)>1 ?reduceProductQuantity(product): removeItem(product)}
                          className="text-xl  text-red-500 hover:text-red-700 px-2"
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
                          className="text-xl  text-green-500 hover:text-green-700 px-2"
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => addNewProductToCart(product)}
                        className="bg-violet-900 hover:bg-violet-600 text-white font-bold py-1 px-3 rounded-full"
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
      </div>
    </div>
  );
}

export default Shop;
