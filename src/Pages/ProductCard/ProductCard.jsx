import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";


const ProductCard = () => {
    
    const [productCard, setProductCard] = useState({});


    //product data load from database
    const products = useLoaderData();
    console.log(products)

    //get specific product id
    const {_id} = useParams();
    console.log(_id)

    useEffect(()=>{
        const getProduct = products?.find(pro => pro._id === _id)
        setProductCard(getProduct)
    }, [_id, products])
    console.log(productCard)


    return (
        <div>
            <ProductDetails productCard={productCard}></ProductDetails>
        </div>
    );
};

export default ProductCard;