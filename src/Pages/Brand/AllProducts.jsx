/* eslint-disable react/prop-types */

import Product from "./Product";

const AllProducts = ({products}) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  lg:gap-5 w-full md:w-[770px] lg:w-[1300px] mx-auto mt-[30px] md:mt-[70px] md:mb-[70px]">
                {
                    products?.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default AllProducts;