/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const product = useLoaderData();
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
  console.log(productName)

  const handleUpdateProduct = (e) => {
    e.preventDefault();

    const form = e.target;

    const brand = form.brand.value;
    const productName = form.productName.value;
    const type = form.type.value;
    const price = form.price.value;
    const productPic = form.productPic.value;
    const rating = form.brand.value;
    const description = form.description.value;

    const updateProduct = {
      brand,
      productName,
      type,
      price,
      productPic,
      rating,
      description,
    };
    console.log(updateProduct);

    //send newProduct data to the server
    fetch(`https://brand-shop-server-side-kohl.vercel.app/product/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data. modifiedCount > 0) {
          Swal.fire("Product Updated Successfully", "success");
        }
      });
  };

  return (
    <div className="bg-[#DCDCDC] p-24 w-[1100px] mx-auto mt-12 mb-12">
      <h2 className="text-4xl font-bold uppercase">
        Update a Product
      </h2>
      <form onSubmit={handleUpdateProduct}>
        {/* brand name and product name */}
        <div className="flex mb-8">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <select name="brand" defaultValue={brand} className="select w-full border-black ">
              <option disabled selected>
                Select Your Favourite Brand
              </option>
              <option>Nike</option>
              <option>Adidas</option>
              <option>Gucci</option>
              <option>Aarong</option>
              <option>Zara</option>
              <option>Levis</option>
            </select>
          </div>
          <div className="form-control w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <label className="">
              <input
                type="text"
                name="productName"
                defaultValue={productName}
                placeholder="Product Name"
                className="input input-bordered w-full border-black"
              />
            </label>
          </div>
        </div>
        {/* product type and product price row */}
        <div className="flex mb-8">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Product Type</span>
            </label>
            <label className="">
              <input
                type="text"
                name="type"
                defaultValue={type}
                placeholder="Product Type"
                className="input input-bordered w-full border-black"
              />
            </label>
          </div>
          <div className="form-control w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Product Price</span>
            </label>
            <label className="">
              <input
                type="text"
                name="price"
                defaultValue={price}
                placeholder="Product Price"
                className="input input-bordered w-full border-black"
              />
            </label>
          </div>
        </div>
        {/* product pic and rating row */}
        <div className="flex mb-8">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Product Pic</span>
            </label>
            <label className="">
              <input
                type="text"
                name="productPic"
                defaultValue={productPic}
                placeholder="Product Pic"
                className="input input-bordered w-full border-black"
              />
            </label>
          </div>
          <div className="form-control w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="">
              <input
                type="number"
                name="rating"
                defaultValue={rating}
                placeholder="Rating"
                className="input input-bordered w-full border-black"
              />
            </label>
          </div>
        </div>
        {/* form photo url */}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Product Description</span>
            </label>
            <label className="">
              <input
                type="text"
                name="description"
                defaultValue={description}
                placeholder="Product Description"
                className="input input-bordered w-full border-black"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Update Product"
          className=" btn  bg-black font-bold  uppercase p-3 text-white w-[400px] ml-[250px]"
        />
      </form>
    </div>
  );
};

export default UpdateProduct;
