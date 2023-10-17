const Banner = () => {
  return (
    <div className="bg-[#DCDCDC] w-full h-[500px]">
      <div className="flex justify-center items-center w-[1300px] gap-[40px] mx-auto">
        <div>
          <img className="mt-[100px] shadow-2xl rounded-full" src="https://i.ibb.co/CV0w1Sc/shopping.jpg" alt="" />
        </div>
        <div className="mt-[100px]">
          <h1 className="text-5xl font-bold mb-5">Start Your Shopping Today</h1>
          <p className="mb-5">Indulge in a world of endless choices and discover the joy of finding your perfect purchase while shopping online. Elevate your shopping experience today!</p>
          <button className="btn bg-black text-white">View Collections</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
