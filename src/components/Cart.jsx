import { useNavigate, Link } from "react-router-dom";
import paymentPng from "../assets/paymentOptions.png";
import { truncate } from "../../utils";
import cartBg from "../assets/cartBg.jpg";
import { useContext, useMemo } from "react";
import { CartContext } from "../context/cartContext";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-grow bg-black text-white p-4">
      <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
      <p className="text-gray-400 mb-4">
        Looks like you haven&apos;t added anything to your cart yet.
      </p>
      <Link
        to="/shop"
        className="bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded"
      >
        Shop Now
      </Link>
    </div>
  );
};

function Cart() {
  const {
    cartItems,
    removeItem,
    increaseProductQuantity,
    reduceProductQuantity,
    emptyCart,
  } = useContext(CartContext);

  let navigate = useNavigate();

  const routeChange = () => {
    let path = "/";
    emptyCart();
    navigate(path);
  };

  const totalPrice = useMemo(() => {
    cartItems.reduce(
      (total, item) => total + item.product.price * item.value,
      0
    );
  }, [cartItems]);

  if (cartItems.length === 0) return <EmptyCart />;

  return (
    <div
      className="cart-div flex-grow grid grid-cols-5 gap-x-5 px-2 py-1 bg-cover animate-fadeIn"
      style={{ backgroundImage: `url(${cartBg})` }}
    >
      <div className="leftSide col-span-3 p-4 my-2 bg-black bg-opacity-50 animate-fadeIn">
        <div className="flex justify-between items-center mb-4 text-white">
          <h2 className="text-2xl font-semibold">Your Shopping Cart</h2>
          <span className="text-lg font-medium">
            {cartItems.length} {cartItems.length === 1 ? "Item" : "Items"}
          </span>
        </div>

        <div className="card-container flex flex-col gap-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="item-card flex gap-4 p-4 shadow-md rounded-xl bg-black text-white transition-transform transform hover:scale-105 animate-slideUp"
            >
              <img
                src={item.product.images[0]}
                alt={item.product.title}
                className="productImage w-32 h-32 object-cover rounded-lg transition-transform transform hover:scale-110"
              />
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <div className="productTitle font-semibold text-xl mb-2">
                    {item.product.title}
                  </div>
                  <div className="text-gray-400 text-sm mb-2">
                    {truncate(item.product.description, 100)}
                  </div>
                </div>
                <div className="item-qty-price flex items-center justify-between">
                  <div className="item-qty flex items-center justify-center">
                    <button
                      onClick={() => reduceProductQuantity(item)}
                      className="text-xl text-red-500 hover:text-red-700 px-2 transition-transform transform hover:scale-125"
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
                      className="text-xl text-green-500 hover:text-green-700 px-2 transition-transform transform hover:scale-125"
                    >
                      +
                    </button>
                  </div>
                  <div className="item-amount text-lg font-semibold">
                    ${item.product.price * item.value}
                  </div>
                </div>
              </div>
              <button
                onClick={() => removeItem(item)}
                className="text-red-500 hover:text-red-700 font-bold self-start transition-transform transform hover:scale-125"
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="rightSide col-span-2 my-2 p-4 bg-black rounded-lg shadow-md self-start sticky top-0 text-white animate-fadeIn">
        <div className="total-bill flex justify-between items-center border-b pb-2 mb-4">
          <div className="text-lg font-medium">Estimated Price</div>
          <div className="text-xl font-semibold">${totalPrice}</div>
        </div>
        <button
          onClick={routeChange}
          className="w-full py-2 mb-4 bg-purple-900 text-white font-semibold rounded-lg hover:bg-white hover:text-purple-950 transition-colors duration-300 ease-in-out"
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
