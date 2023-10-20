/* eslint-disable no-unused-vars */

import { useContext } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

/* eslint-disable react/prop-types */
const ProductDetails = ({ productCard }) => {
  const {
    _id,
    brand,
    description,
    price,
    productName,
    productPic,
    rating,
    type,
  } = productCard || {};

  const {user} = useContext(AuthContext);
  const userEmail = user.email;
  console.log(userEmail)


  const handleAddToCart = e => {
     e.preventDefault();

     //send cart product data object to the server
     const cartProductData = {
      brand,
      description,
      price,
      productName,
      productPic,
      rating,
      type,
      userEmail,
     }
     console.log(cartProductData)

     //send data to the server
     fetch('https://brand-shop-server-side-kohl.vercel.app/addCart', {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartProductData)
     })
     .then(res => res.json())
     .then(data => {
      console.log(data)
      if(data.insertedId){
        console.log('cart product data added')
        Swal.fire("Product Added To The Cart ", "success");
      }
     })
  }


  return (
    <div>
      <div className="h-[900px] md:h-[1100px] lg:h-[900px] flex flex-col md:flex-col lg:flex-row justify-center items-center md:w-[700px] lg:w-[1400px] w-[370px] mx-auto gap-12 lg:mb-0 mb-[50px] lg:mt-0 mt-[70px]">
        <div className="w-[350px] h-[450px] border border-black">
          <img
            className="lg:w-[250px] lg:h-[250px] w-[250px] h-[250px]  md:w-[250px] md:h-[250px] mt-[100px] lg:mt-[100px] ml-[50px] lg:ml-[50px] "
            src={productPic}
            alt=""
          />
        </div>
        <div className="w-[400px] md:w-[500px] md:text-left text-center">
          <h1 className="text-xl font-bold mt-5 mb-3">PRODUCT NAME: {productName}</h1>
          <h1 className="text-5xl font-bold mb-4">RATING: {rating}</h1>
          <h1 className="text-5xl font-bold mb-4">PRICE: {price}TK</h1>
          <h1 className="text-xl font-bold mb-4">{description}</h1>
          <button onClick={handleAddToCart} className="bg-black text-white p-3 font-bold">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
