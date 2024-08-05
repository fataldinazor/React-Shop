import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex items-center justify-center flex-grow text-black p-4 bg-cover bg-[url(./assets/homeBgNeon.jpg)]">
      <div className="bg-black rounded-lg p-6 bg-opacity-50 animate-fadeIn">
        <div className="flex flex-col items-center justify-center text-white bg-opacity-100">
          <h1 className="text-4xl font-bold mb-4 animate-slideInUp">
            Welcome to React Store
          </h1>
          <p className="text-lg mb-6 text-center max-w-xl text-gray-300 animate-slideInUp">
            Discover a wide range of products, from electronics to clothing, all
            at amazing prices. Our store is committed to providing high-quality
            products and excellent customer service. Shop now and enjoy a
            seamless shopping experience!
          </p>
          <Link
            to="/shop"
            className="bg-pink-700 text-white hover:bg-white hover:text-pink-700 font-bold py-2 px-4 rounded-full transform transition-transform duration-300 hover:scale-105 animate-fadeInDelay"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
