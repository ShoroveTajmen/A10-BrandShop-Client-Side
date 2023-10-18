import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import AllProducts from "./AllProducts";

const Brand = () => {

    //for storing the filtered productData
    const [products, setProducts] = useState({});
    
    //collect specific brandName
    const {brandName} = useParams();
    console.log(brandName);

    //load all productData from database
    const loadedProducts = useLoaderData();
    console.log(loadedProducts);

    //filter data by brand name
    useEffect(()=>{
        const getProduct = loadedProducts?.filter(pro => pro.brand === brandName)
        setProducts(getProduct)
    },[brandName, loadedProducts])
    console.log(products);
   

    return (
        <div>
            <h2>Specific brand here :{loadedProducts.length}</h2>
            <AllProducts products={products}></AllProducts>
        </div>
    );
};

export default Brand;