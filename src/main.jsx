import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Home from "./components/Home";
import About from "./components/About"
import Shop, { shopLoader } from "./components/Shop"
import Cart from "./components/Cart";
import Product, { productDetailLoader } from "./components/Product"
import InitialShop from "./components/InitialShop";

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='shop' element={<InitialShop/>}>
        <Route index element={<Shop/>} loader={shopLoader} errorElement={<div>Network Error occurred</div>}/>
        <Route path=':id' element={<Product/>} loader={productDetailLoader} errorElement={<div>Oops! Something Went Wrong</div>}/>
      </Route>
      <Route path="cart" element={<Cart/>}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    < RouterProvider router={router}/>
  </React.StrictMode>
);
