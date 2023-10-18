const AddProduct = () => {

    const handleAddProduct = (e) => {
        e.preventDefault();

        const form = e.target;

        const brand = form.brand.value;
        const productName = form.productName.value;
        const type = form.type.value;
        const price = form.price.value;
        const productPic = form.productPic.value;
        const rating = form.brand.value;
        const description = form.description.value;
 
        const newProduct = {brand, productName, type, price, productPic, rating, description}
        console.log(newProduct);

        //send newProduct data to the server 
        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
              },
            body: JSON.stringify(newProduct),  
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                console.log('product added');
            }
        })

    }




  return (
    <div className="bg-[#DCDCDC] p-24 w-[1100px] mx-auto mt-12 mb-12">
      <h2 className="text-3xl font-extrabold text-[#c97d4a]">Add a Product</h2>
      <form onSubmit={handleAddProduct}>
        {/* brand name and product name */}
        <div className="flex mb-8">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
              <select name="brand" className="select w-full ">
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
                placeholder="Product Name"
                className="input input-bordered w-full"
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
                placeholder="Product Type"
                className="input input-bordered w-full"
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
                placeholder="Product Price"
                className="input input-bordered w-full"
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
                placeholder="Product Pic"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="">
              <input
                type="text"
                name="rating"
                placeholder="Rating"
                className="input input-bordered w-full"
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
                placeholder="Product Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Add Product"
          className="btn font-bold text-xl bg-[#c97d4a] text-white w-[400px] ml-[250px]"
        />
      </form>
    </div>
  );
};

export default AddProduct;
