import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";

const Login = () => {
  return (
    <div>
      <div>
        <h2 className="text-5xl my-10 text-center font-bold text-[#c97d4a] mt-[50px]">
          Please Login
        </h2>
        <div className="md:w-[500px] mx-auto h-[400px] bg-[#DCDCDC] shadow-2xl rounded-lg mb-9 p-8">
          <form>
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
              <button type="submit" className="btn bg-[#c97d4a] text-white font-bold">
                Login
              </button>
            </div>
          </form>
          <p className="text-center mt-4">
            Do not have an account?{" "}
            <Link className="text-[#c97d4a] font-bold" to="/register">
              Register
            </Link>
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
