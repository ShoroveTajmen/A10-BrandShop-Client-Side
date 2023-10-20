import { useLoaderData } from "react-router-dom";
import CartProducts from "./CartProducts";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyCart = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user.email;
  console.log(userEmail);

  const loadedCartProducts = useLoaderData();
  //   console.log(cartProducts);

  //filter data by brand name
  //   useEffect(()=>{
  //     const getProduct = loadedProducts.filter(pro => pro.brand === brandName)
  //     setProducts(getProduct)
  // },[brandName, loadedProducts])
  const [findUserProduct, setFindUserProduct] = useState(loadedCartProducts);
  useEffect(() => {
    const getCartProduct = loadedCartProducts.filter(
      (pro) => pro.userEmail === userEmail
    );
    setFindUserProduct(getCartProduct);
  }, [loadedCartProducts, userEmail]);
  console.log(findUserProduct);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  lg:gap-5 w-full md:w-[770px] lg:w-[1400px] mx-auto mt-[70px] md:mt-[70px] mb-[50px] md:mb-[70px]">
        {findUserProduct?.map((product) => (
          <CartProducts
            key={product._id}
            product={product}
            // cartProducts={cartProducts}
            // setCartProducts={setCartProducts}
            findUserProduct={findUserProduct}
            setFindUserProduct={setFindUserProduct}
          ></CartProducts>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
