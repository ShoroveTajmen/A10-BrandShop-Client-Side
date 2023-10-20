const CommentSection = () => {
  return (
    <div className="lg:mb-[100px] ">
      <div className="p-12 lg:p-0">
        {" "}
        <h2 className="lg:ml-[470px] text-4xl font-bold mb-[20px]">
          Share Your Shopping Experiences
        </h2>
        <hr className="lg:w-[800px] w-[300px] lg:mx-auto mb-[10px] lg:ml-[470px] border-4 border-gray-400 rounded" />
        <h1 className="lg:ml-[470px] mb-[40px] font-semibold">LEAVE COMMENT</h1>
        <div className="lg:ml-[470px]">
          <input
            type="text"
            placeholder="Your Name"
            className="mb-[10px] lg:mb-0 p-3 input-bordered w-full max-w-xs bg-[#e5e5e5] mr-8 border border-black"
          />
          <input
            type="text"
            placeholder="Your Email"
            className="p-3 input-bordered w-full max-w-xs bg-[#e5e5e5] border border-black"
          />{" "}
          <br />
          <textarea
            className="lg:w-[670px] w-[400px] h-[250px] bg-[#e5e5e5]  mt-5 border border-black"
            placeholder="  Message"
          ></textarea>
        </div>
        <button className="bg-black text-white pl-8 pr-8 pt-4 pb-4 font-bold text-xl lg:ml-[470px] mt-5">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
