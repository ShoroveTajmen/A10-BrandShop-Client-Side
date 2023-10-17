import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
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
        <div className=" w-1/3">
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
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
