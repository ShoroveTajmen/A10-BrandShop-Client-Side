import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct"
import MyCart from "../Pages/MyCart/MyCart"
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register"
import Brand from "../Pages/Brand/Brand";
import ProductCard from "../Pages/ProductCard/ProductCard";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";


const myCreateRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch("/data.json"),
            },
            {
                path: '/addProduct',
                element:<AddProduct></AddProduct>
            },
            {
                path: '/brand/:brandName',
                element: <Brand></Brand>,
                loader: () => fetch('http://localhost:5000/product'),
            },
            {
                path: '/product/:_id',
                element: <ProductCard></ProductCard>,
                loader: () => fetch('http://localhost:5000/product'),

            },
            {
                path: '/updateProduct/:id',
                element: <UpdateProduct></UpdateProduct>,
                loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path: '/myCart',
                element: <MyCart></MyCart>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }

])
export default myCreateRoute;