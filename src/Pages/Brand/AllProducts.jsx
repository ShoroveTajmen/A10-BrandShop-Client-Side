/* eslint-disable react/prop-types */

import Product from "./Product";

const AllProducts = ({products}) => {
    return (
        <div>
            <div>
                {
                    products?.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default AllProducts;