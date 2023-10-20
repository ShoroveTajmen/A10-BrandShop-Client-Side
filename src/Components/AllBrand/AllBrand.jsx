import { Link } from "react-router-dom";


/* eslint-disable react/prop-types */
const AllBrand = ({ data }) => {
  // eslint-disable-next-line no-unused-vars
  const { id, brandName, brandImage } = data || {};
  // console.log(data)
  return (
    <div>
      <Link to={`/brand/${brandName}`}>
        <div className="ml-[90px] lg:ml-0 w-[300px] bg-base-100 shadow-xl border border-black">
          <figure>
            <img className="w-full h-[200px]" src={brandImage} alt="Product" />
          </figure>
          <div className="card-body">
            <h2 className="text-center uppercase font-bold text-[20px]">{brandName}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AllBrand;
