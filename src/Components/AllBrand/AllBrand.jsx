import { Link } from "react-router-dom";
import Brand from "../../Pages/Brand/Brand";

/* eslint-disable react/prop-types */
const AllBrand = ({ data }) => {
  // eslint-disable-next-line no-unused-vars
  const { id, brandName, brandImage } = data || {};
  return (
    <div>
      <Link to={`/brand/${brandName}`}>
        <div className=" w-[300px] bg-base-100 shadow-xl">
          <figure>
            <img className="w-full h-[200px]" src={brandImage} alt="Product" />
          </figure>
          <div className="card-body">
            <h2 className="text-center font-bold text-[20px]">{brandName}</h2>
          </div>
        </div>
        {
          <Brand data={data.brandName}></Brand>
        }
      </Link>
    </div>
  );
};

export default AllBrand;
