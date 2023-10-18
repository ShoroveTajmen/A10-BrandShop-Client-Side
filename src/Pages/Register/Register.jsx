import { Link } from "react-router-dom";
import SocialLogin from "../Login/SocialLogin";

const Register = () => {
  return (
    <div>
      <div>
        <h2 className="text-5xl my-10 text-center font-bold text-[#c97d4a] ml-4 md:ml-0 mt-14 ">
          Please Register
        </h2>
        <div className="md:w-[500px] mx-auto h-[570px] bg-[#DCDCDC] shadow-2xl rounded-lg mb-9 p-8">
          <form>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#c97d4a] text-white  font-bold">Register</button>
            </div>
          </form>

          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link className="text-[#c97d4a] font-bold" to="/login">
              Login
            </Link>
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Register;
