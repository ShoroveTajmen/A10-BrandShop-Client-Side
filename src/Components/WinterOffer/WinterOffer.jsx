const WinterOffer = () => {
  return (
    <div className="bg-[#DCDCDC] mt-[70px] lg:mt-0 mb-[30px] lg:mb-[100px] lg:h-[500px] h-[1000px]">
      <div className="flex flex-col lg:flex-row  lg:w-[1200px] mx-auto  justify-between items-center ">
        <div className=" mt-[30px]">
          <h1 className="text-2xl font-semibold mb-3 text-center lg:text-start">Winter Collection</h1>
          <p className="text-6xl font-bold text-center lg:text-start">50% Off</p>
          <div className="flex flex-col lg:flex-row  lg:gap-[200px] items-center">
            {" "}
            <h1 className="text-2xl font-semibold mt-7 lg:mt-0 mb-7 lg:mb-0">Sale Going On</h1>

            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
              <div className="flex flex-col p-2 bg-neutral  text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 15 }}></span>
                </span>
                days
              </div>
              <div className="flex flex-col p-2 bg-neutral  text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 10 }}></span>
                </span>
                hours
              </div>
              <div className="flex flex-col p-2 bg-neutral  text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 24 }}></span>
                </span>
                min
              </div>
              <div className="flex flex-col p-2 bg-neutral  text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 49 }}></span>
                </span>
                sec
              </div>
            </div>

          </div>

          <button className="bg-black uppercase text-white pl-8 pr-8 pt-4 pb-4 font-bold text-xl mt-[30px] lg:mt-0 ml-[80px] lg:ml-0">
            Shop Now
          </button>
        </div>
        <div className="mt-[70px] lg:mt-0">
          <img
            className="w-[450px] h-[500px]"
            src="https://i.ibb.co/CKDNTHG/w3.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default WinterOffer;
