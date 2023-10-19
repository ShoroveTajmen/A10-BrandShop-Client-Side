/* eslint-disable no-unused-vars */
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


  const handleAddToCart = e => {
     e.preventDefault();

     //send cart product data object to the server
     const cartProductData = {
      _id,
      brand,
      description,
      price,
      productName,
      productPic,
      rating,
      type,
     }
     console.log(cartProductData)

     //send data to the server
     fetch('http://localhost:5000/addCart', {
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
      }
     })
  }


  return (
    <div>
      <div className="h-[900px] md:h-[1100px] lg:h-[900px] flex flex-col md:flex-col lg:flex-row justify-center items-center md:w-[700px] lg:w-[1400px] w-[370px] mx-auto gap-12 mb-[1px]">
        <div className="w-[350px] h-[450px] border border-black">
          <img
            className="w-[350px] h-[350px] md:w-[250px] md:h-[250px] mt-12 lg:mt-[100px] ml-[50px] "
            src={productPic}
            alt=""
          />
        </div>
        <div className="w-[400px] md:w-[500px] md:text-left text-center">
          <h1 className="text-xl font-bold mt-5 mb-3">Product Name: {productName}</h1>
          <h1 className="text-5xl font-bold mb-4">{rating}</h1>
          <h1 className="text-5xl font-bold mb-4">Price: {price}TK</h1>
          <h1 className="text-xl font-bold mb-4">{description}</h1>
          <button onClick={handleAddToCart} className="btn btn-outline">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
