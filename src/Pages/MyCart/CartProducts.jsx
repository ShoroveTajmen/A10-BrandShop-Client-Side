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
            fetch(`http://localhost:5000/addCart/${_id}`, {
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
            <div>
              <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-sm rounded-3xl  font-bold capitalize ml-[60px]">
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
