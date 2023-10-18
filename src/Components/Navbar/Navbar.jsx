import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <nav className="flex flex-col md:flex-row md:justify-between md:items-center py-3 md:py-2  md:px-5 md:ml-0 shadow-xl rounded-lg  ">
        <Logo></Logo>
        <div className="w-1/3 ml-[300px]">
          <ul className="flex gap-5 font-bold text-lg flex-col md:flex-row md:justify-center md:items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#c97d4a] underline"
                    : ""
                }
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addProduct"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#c97d4a] underline"
                    : ""
                }
              >
                ADD PRODUCT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/myCart"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#c97d4a] underline"
                    : ""
                }
              >
                MY CART
              </NavLink>
            </li>
          </ul>
        </div>
        {/* <div className=" w-1/3">
          <ul className="flex gap-5 font-bold text-lg flex-col md:flex-row md:justify-end md:items-center">
            <li>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#c97d4a] underline"
                    : ""
                }
              >
                LOGIN
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#c97d4a] underline"
                    : ""
                }
              >
                REGISTER
              </NavLink>
            </li>
          </ul>
        </div> */}
        <div className="flex  lg:w-[700px] font-bold text-lg flex-col md:flex-row md:justify-end  md:items-center ">
          {/* Register */}

          <div className="mb-3 md:mb-0 ml-[170px] md:ml-0">
              <Link to="/register">
                <button className="btn btn-sm  btn-primary font-bold">
                  Register
                </button>
              </Link>
          </div>

          {/* profile pic, username, log out button  */}
          <div className="ml-3">
            {user?.email ? (
              <div className="flex gap-4 justify-center items-center w-[300px] ml-[50px] md:ml-0">
                <div className=" rounded-full">
                  <img
                    className="rounded-full w-[90px] h-[50px]"
                    src={user.photoURL}
                    alt={user.displayName}
                  />
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 w-[400px] z-[1] p-2 shadow bg-base-100 rounded-box "
                >
                  <li>
                    <button className="btn btn-sm  btn-ghost">
                      {user.displayName}
                    </button>
                  </li>
                  <li>
                    <button
                      className="btn btn-sm btn-primary font-bold"
                      onClick={logOut}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login">
                <button className="btn btn-sm btn-primary font-bold ml-[170px] md:ml-0">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
