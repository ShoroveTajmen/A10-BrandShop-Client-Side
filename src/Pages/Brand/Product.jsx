/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */
const Product = ({ product }) => {
  const {
    _id,
    brand,
    description,
    price,
    productName,
    productPic,
    rating,
    type,
  } = product || {};
  return (
    <div>
      <div className="w-[300px] h-[450px] border border-[#c97d4a]">
        <figure>
          <img
            className="w-[200px] h-[200px] ml-[50px] mt-[20px]"
            src={productPic}
            alt="Shoes"
          />
        </figure>
        <div className="p-5 text-center space-y-5">
          <div className="space-y-3 font-bold">
            <h2 className="">Product Name: {productName}</h2>
            <h2>Product Type: {type}</h2>
            <h2>Price: {price}</h2>
            <h2>Rating: {rating}</h2>
          </div>
          <div className="flex gap-2">
            <Link to={`/product/${_id}`}>
              {" "}
              <button className="btn btn-outline btn-sm rounded-3xl  font-bold capitalize">
                Product Details
              </button>
            </Link>
            <button className="btn btn-outline btn-sm rounded-3xl  font-bold capitalize">
              Update Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
