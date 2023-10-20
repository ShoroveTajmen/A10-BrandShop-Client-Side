/* eslint-disable react/prop-types */

import Product from "./Product";
import Slider from "./Slider";

const AllProducts = ({ products }) => {
  //   console.log(products);
  return (
    <div>
      {/* slider */}
      <div>
        {/* <div className="carousel w-[1000px] h-[50vh] ml-[300px] mt-[60px]">
          <div id="slide1" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/h8jqYVd/b1.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/qWrQ9NK/b2.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/QbF7NjJ/b3.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div> */}
        <Slider></Slider>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  lg:gap-5  md:w-[770px] w-[350px] lg:w-[1500px] mx-auto mt-[30px] md:mt-[70px] md:mb-[70px]">
        {/* {products?.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))} */}
        {products && products.length > 0 ? (
          products.map((product) => (
            <Product key={product._id} product={product} />
          ))
        ) : (
          <p className="col-span-4 text-center text-[#c97d4a] text-4xl font-bold mt-[100px] mb-[200px]">No products found based on this brand. Check back later for new arrivals !!</p>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
