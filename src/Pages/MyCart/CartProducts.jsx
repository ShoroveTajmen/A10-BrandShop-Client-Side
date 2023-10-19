/* eslint-disable react/prop-types */
import Swal from "sweetalert2";

/* eslint-disable no-unused-vars */
const CartProducts = ({ product, cartProducts, setCartProducts }) => {
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
  //   console.log(brand)


  const handleDelete = (_id) => {
    console.log(_id)
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      })
      .then(result => {
        if(result.isConfirmed){
            fetch(`https://brand-shop-server-side-kohl.vercel.app/addCart/${_id}`, {
                method: "DELETE",
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire("Deleted!", "Your product has been deleted.", "success");
                    const remaining = cartProducts.filter(pro => pro._id !== _id)
                    setCartProducts(remaining);
                }
            })
        }
      })
  }

  return (
    <div>
      <div>
        <div className="w-[350px] h-[550px] border border-black">
          <figure>
            <img
              className="w-[200px] h-[200px] ml-[50px] mt-[20px]"
              src={productPic}
              alt="Shoes"
            />
          </figure>
          <div className="mt-8 ml-[50px] space-y-5">
            <div className="space-y-3 font-bold">
              <h2 className="">Product Name: {productName}</h2>
              <h2>Product Type: {type}</h2>
              <h2>Price: {price} TK</h2>
              <h2>Rating: {rating}</h2>
            </div>
            <div>
              <button onClick={() => handleDelete(_id)} className="bg-black text-white p-3  font-bold uppercase mt-[50px]">
                Delete Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
