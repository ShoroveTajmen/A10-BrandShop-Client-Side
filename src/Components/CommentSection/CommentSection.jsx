const CommentSection = () => {
  return (
    <div className="mb-[100px]">
      <div className="">
        {" "}
        <h2 className="ml-[470px] text-4xl font-bold mb-[20px]">
          Share Your Shopping Experiences
        </h2>
        <hr className="w-[800px] mx-auto mb-[10px] ml-[470px]" />
        <h1 className="ml-[470px] mb-[40px]">LEAVE COMMENT</h1>
        <div className="ml-[470px]">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 input-bordered w-full max-w-xs bg-[#e5e5e5] mr-8"
          />
          <input
            type="text"
            placeholder="Your Email"
            className="p-3 input-bordered w-full max-w-xs bg-[#e5e5e5]"
          />{" "}
          <br />
          <textarea
            className="w-[670px] h-[250px] bg-[#e5e5e5]  mt-5"
            placeholder="  Message"
          ></textarea>
        </div>
        <button className="bg-black text-white pl-8 pr-8 pt-4 pb-4 font-bold text-xl ml-[470px] mt-5">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
