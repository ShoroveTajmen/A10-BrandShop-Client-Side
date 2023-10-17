/* eslint-disable react/prop-types */
import AllBrand from "../AllBrand/AllBrand";

const AllData = ({data}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:gap-5 w-full md:w-[770px] lg:w-[1000px] mx-auto mt-[30px] md:mt-[70px] md:mb-[70px]">
            {
                data?.map(data => <AllBrand key={data.id} data={data}></AllBrand>)
            }
        </div>
    );
};

export default AllData;