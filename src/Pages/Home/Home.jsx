import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import AllData from "../../Components/AllData/AllData";
import WinterOffer from "../../Components/WinterOffer/WinterOffer";

const Home = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div>
      <Banner></Banner>
      <div className="mt-[70px]">
        {" "}
        <h1 className="text-center font-bold text-4xl">Explore Your Favourite Brands</h1>
      </div>

      <AllData data={data}></AllData>
      <WinterOffer></WinterOffer>
    </div>
  );
};

export default Home;
