/* eslint-disable react/prop-types */
const Product = ({product}) => {
    const {brand, price} = product || {};
    return (
        <div>
            <h2>Individual products name : {brand}</h2>
            <h2>product rating: {price}</h2>
        </div>
    );
};

export default Product;