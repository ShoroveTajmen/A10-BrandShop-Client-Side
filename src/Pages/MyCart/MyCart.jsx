import { useLoaderData } from "react-router-dom";
import CartProducts from "./CartProducts";
import { useState } from "react";

const MyCart = () => {
  const loadedCartProducts = useLoaderData();
  const [cartProducts, setCartProducts] = useState(loadedCartProducts)
//   console.log(cartProducts);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  lg:gap-5 w-full md:w-[770px] lg:w-[1400px] mx-auto mt-[70px] md:mt-[70px] mb-[50px] md:mb-[70px]">
        {cartProducts?.map((product) => (
          <CartProducts key={product._id} product={product} cartProducts={cartProducts} setCartProducts={setCartProducts}></CartProducts>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
