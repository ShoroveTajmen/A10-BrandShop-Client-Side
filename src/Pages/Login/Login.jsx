import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {

  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const [regError, setRegError] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [success, setSuccess] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    //get input fieeld values
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);

    //reset error
    setRegError("");
    setSuccess("");

    //password validation
    if (password.length < 6) {
      setRegError("Password should be at least 6 characters.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegError("Password should have at least one upper case character.");
      return;
    } else if (!/[!@#$%^&*()_+{}\\[\]:;<>,.?~\\|]/.test(password)) {
      setRegError("Password should have one special character.");
      return;
    }

    //create a new user
    signIn(email, password)
      .then((res) => {
        console.log(res.user);
        setSuccess(toast.success("Login Successful"));
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message)
      });
  };

  return (
    <div>
      <div>
        <h2 className="text-5xl my-10 text-center font-bold text-[#c97d4a] mt-[50px]">
          Please Login
        </h2>
        <div className="md:w-[500px] mx-auto h-[400px] bg-[#DCDCDC] shadow-2xl rounded-lg mb-9 p-8">
          <form onSubmit={handleSubmit}>
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
            {regError && <p className="text-red-700">{regError}</p>}
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-[#c97d4a] text-white font-bold"
              >
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
