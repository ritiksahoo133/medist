import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  getToken,
  removeToken,
  removeUserName,
} from "../services/localStorageService";
import Button from "../UI/Button";
import { authActions } from "./../store/auth-slice";

const MobileMenu = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const totalCartItems = useSelector((state) => state.cart.totalQuantity);
  const { access_token } = getToken();
  const accessToken = useSelector((state) => state.auth.access_token);

  function handleClick() {
    navigate("/signin");
  }
  function handleLogout() {
    removeToken();
    removeUserName();
    dispatch(authActions.unsetUserToken());
  }
  useEffect(() => {
    dispatch(authActions.setUserToken(access_token));
  }, []);
  const activeClassName = "text-primary";
  const mobileMenuClasses = `lg:hidden fixed top-0 z-10 right-0 bg-white shadow-lg flex flex-col gap-3 h-screen w-3/4 s:w-1/2 md:w-1/3 pl-6 transition duration-300 ${props.className}`;

  return (
    <div className={mobileMenuClasses}>
      <nav className="relative">
        <ul className="flex flex-col gap-6 mt-10 text-sm xs:text-base">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? activeClassName
                  : "hover:text-primary transition duration-200"
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? activeClassName
                  : "hover:text-primary transition duration-200"
              }
            >
              ABOUT
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? activeClassName
                  : "hover:text-primary transition duration-200"
              }
            >
              PRODUCTS
            </NavLink>
          </li>
          <li>
            <Link to="/cart" className="relative">
              <i className="fa-solid fa-cart-shopping fa-lg"></i>
              <small className="absolute bg-light-red aspect-square text-white -top-2 -right-2 rounded-lg flex justify-center items-center w-5 h-4">
                {totalCartItems}
              </small>
            </Link>
          </li>
          <li>
            {!accessToken ? (
              <Button className="primary-btn" onClick={handleClick}>
                <i className="fa-solid fa-circle-user fa-lg"></i> Sign In
              </Button>
            ) : (
              <Button className="primary-btn" onClick={handleLogout}>
                Logout
              </Button>
            )}
          </li>
        </ul>
        <i
          className="fa-solid fa-xmark fa-lg absolute top-6 right-5"
          onClick={props.onClose}
        ></i>
      </nav>
    </div>
  );
};

export default MobileMenu;
