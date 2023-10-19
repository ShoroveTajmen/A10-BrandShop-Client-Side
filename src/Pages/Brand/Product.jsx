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
      <div className="w-[350px] h-[500px] border border-black mb-[100px]">
        <figure>
          <img
            className="w-[200px] h-[200px] ml-[50px] mt-[20px]"
            src={productPic}
            alt="Shoes"
          />
        </figure>
        <div className="p-5 ml-[30px] space-y-5">
          <div className="space-y-3 font-bold">
            <h2>BRAND: {brand}</h2>
            <h2 className="">PRODUCT NAME: {productName}</h2>
            <h2>PRODUCT TYPE: {type}</h2>
            <h2>{price} TK</h2>
            <h2>RATING OUT OF/5: {rating}</h2>
          </div>
          <div className="flex gap-2">
            <Link to={`/product/${_id}`}>
              {" "}
              <button className="bg-black text-white text-[12px] font-semibold p-2 uppercase">
                Product Details
              </button>
            </Link>
            <Link to={`/updateProduct/${_id}`}>
              {" "}
              <button className="bg-black text-white text-[12px] font-semibold p-2 uppercase">
                Update Product
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
