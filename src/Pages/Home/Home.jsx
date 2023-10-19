import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import AllData from "../../Components/AllData/AllData";
import WinterOffer from "../../Components/WinterOffer/WinterOffer";
import CommentSection from "../../Components/CommentSection/CommentSection";

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
      <CommentSection></CommentSection>
    </div>
  );
};

export default Home;
