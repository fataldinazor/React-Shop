import { useNavigate, useOutletContext, Link } from "react-router-dom";
import paymentPng from "../assets/paymentOptions.png";
import { truncate } from "../../utils";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-grow bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
      <p className="text-gray-600 mb-4">
        Looks like you haven&apos;t added anything to your cart yet.
      </p>
      <Link
        to="/shop"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Shop Now
      </Link>
    </div>
  );
};

function Cart() {
  const [cartItems, setCartItems] = useOutletContext();

  let navigate = useNavigate();
  console.log(cartItems);

  const routeChange = () => {
    let path = "/";
    setCartItems([]);
    navigate(path);
  };

  const totalCartValue = () => {
    let totalCost = 0;
    cartItems.forEach((item) => {
      totalCost += item.product.price * item.value;
    });
    return totalCost;
  };

  const increaseProductQuantity = (product) => {
    const index = cartItems.findIndex((item) => item.id === product.id);
    const updatedCartItems = [...cartItems];

    if (index !== -1) {
      updatedCartItems[index] = {
        ...updatedCartItems[index],
        value: updatedCartItems[index].value + 1,
      };
      setCartItems(updatedCartItems);
    }
  };

  const reduceProductQuantity = (product) => {
    const index = cartItems.findIndex((item) => item.id === product.id);
    const value = cartItems[index].value;
    const updatedCartItems = [...cartItems];
    if (value === 1) return removeItem(product);
    if (value > 1) {
      updatedCartItems[index] = {
        ...updatedCartItems[index],
        value: updatedCartItems[index].value - 1,
      };
      setCartItems(updatedCartItems);
    }
  };

  const removeItem = (product) => {
    const updatedArray = [...cartItems];
    const index = updatedArray.findIndex((item) => item.id === product.id);
    updatedArray.splice(index, 1);
    setCartItems(updatedArray);
  };

  if(cartItems.length===0) return <EmptyCart/>

  return (
    <div className="cart-div grid grid-cols-5 gap-x-5 px-2 py-1">
      <div className="leftSide col-span-3 p-4 my-2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Your Shopping Cart</h2>
          <span className="text-lg font-medium text-gray-700">
            {cartItems.length} {cartItems.length === 1 ? "Item" : "Items"}
          </span>
        </div>

        <div className="card-container flex flex-col gap-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="item-card flex gap-4 p-4 shadow-md rounded-xl bg-gray-50"
            >
              <img
                src={item.product.images[0]}
                alt={item.product.title}
                className="productImage w-32 h-32 object-cover rounded-lg"
              />
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <div className="productTitle font-semibold text-xl mb-2">
                    {item.product.title}
                  </div>
                  <div className="text-gray-700 text-sm mb-2">
                    {truncate(item.product.description, 100)}
                  </div>
                </div>
                <div className="item-qty-price flex items-center justify-between">
                  <div className="item-qty flex items-center justify-center">
                    <button
                      onClick={() => reduceProductQuantity(item)}
                      className="text-xl text-red-500 hover:text-red-700  px-2"
                    >
                      −
                    </button>
                    <div className="border-l h-5 mx-2"></div>
                    <span className="text-lg font-semibold text-center px-2">
                      {item.value}
                    </span>
                    <div className="border-r h-5 mx-2"></div>
                    <button
                      onClick={() => increaseProductQuantity(item)}
                      className="text-xl  text-green-500 hover:text-green-700 px-2"
                    >
                      +
                    </button>
                  </div>
                  <div className="item-amount text-lg font-semibold text-gray-900">
                    ${item.product.price * item.value}
                  </div>
                </div>
              </div>
              <button
                onClick={() => removeItem(item)}
                className="text-red-500 hover:text-red-700 font-bold self-start"
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="rightSide col-span-2 my-2 p-4 bg-gray-50 rounded-lg shadow-md self-start sticky top-0">
        <div className="total-bill flex justify-between items-center border-b pb-2 mb-4">
          <div className="text-lg font-medium text-gray-700">
            Estimated Price
          </div>
          <div className="text-xl font-semibold text-gray-900">
            ${totalCartValue()}
          </div>
        </div>
        <button
          onClick={routeChange}
          className="w-full py-2 mb-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-300 ease-in-out"
        >
          Proceed to Checkout
        </button>
        <div className="payment-options text-center">
          <img
            src={paymentPng}
            alt="Payment Options"
            className="max-w-full h-auto inline-block"
          />
        </div>
      </div>
    </div>
  );
}

export default Cart;
