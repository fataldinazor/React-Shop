import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex items-center justify-center flex-grow text-black p-4 bg-cover bg-[url(./assets/homeBgNeon.jpg)]">
      <div className="bg-black rounded-lg p-6 bg-opacity-50">
        <div className="flex flex-col items-center justify-center text-white bg-opacity-100">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to React Store
          </h1>
          <p className="text-lg mb-6 text-center max-w-xl text-gray-300">
            Discover a wide range of products, from electronics to clothing, all
            at amazing prices. Our store is committed to providing high-quality
            products and excellent customer service. Shop now and enjoy a
            seamless shopping experience!
          </p>
          <Link
            to="/shop"
            className="bg-pink-700 text-white hover:bg-pink-800 font-bold py-2 px-4 rounded-full"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
