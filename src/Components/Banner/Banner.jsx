const Banner = () => {
  return (
    <div className="bg-[#DCDCDC] w-full lg:h-[500px] h-[800px]">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:w-[1300px] lg:gap-[40px] mx-auto">
        <div>
          <img className="mt-[100px] w-[400px] lg:w-[700px] shadow-2xl rounded-full" src="https://i.ibb.co/CV0w1Sc/shopping.jpg" alt="" />
        </div>
        <div className="lg:mt-[100px] mt-[50px] p-5 lg:p-0">
          <h1 className="text-5xl font-bold mb-5">Start Your Shopping Today</h1>
          <p className="mb-5">Indulge in a world of endless choices and discover the joy of finding your perfect purchase while shopping online. Elevate your shopping experience today!</p>
          <button className="p-3 uppercase bg-black text-white">View Collections</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
