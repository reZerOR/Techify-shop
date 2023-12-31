import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import BrandProduct from "../Pages/BrandProduct/BrandProduct";
import ProductDetais from "../Pages/ProductDetails/ProductDetais";
import MyCart from "../Pages/MyCart/MyCart";
import AddProduct from "../Pages/AddProduct/AddProduct";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./Private/PrivateRoute";
import Errorpage from "../Pages/Errorpage/Errorpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/brandproduct/:name",
        element: <BrandProduct></BrandProduct>,
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-one-virid.vercel.app/brands/${params.name}`
          ),
      },
      {
        path: "/productdetails/:id",
        element: (
          <PrivateRoute>
            <ProductDetais></ProductDetais>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-one-virid.vercel.app/productdetails/${params.id}`
          ),
      },
      {
        path: "/mycart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://brand-shop-server-one-virid.vercel.app/curt"),
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-one-virid.vercel.app/productdetails/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
