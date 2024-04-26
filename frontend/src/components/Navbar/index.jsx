import { Link } from "react-router-dom";
import ThemeController from "../ThemeController";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import NotifyToast from "../NotifyToast";
import LogoutConfirm from "../LogoutConfirm";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <nav className="sticky w-full top-0 left-0 z-[999] px-6 py-4 bg-transparent shadow backdrop-blur-[10px]">
        <div className="flex items-center justify-between font-semibold">
          <Link to="/" className="font-bold text-2xl">
            Go
            <span className="text-violet-500">lb</span>
          </Link>
          <div className="flex items-center justify-between gap-4">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost rounded-btn"
              >
                Category
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
              >
                <li>
                  <Link to="/?tags=sport">Sport</Link>
                </li>
                <li>
                  <Link to="/?tags=technology">Technology</Link>
                </li>
                <li>
                  <Link to="/?tags=food">Food</Link>
                </li>
                <li>
                  <Link to="/?tags=financial">Financial</Link>
                </li>
              </ul>
            </div>
            <Link className="btn btn-ghost" to="/write/">
              Write
            </Link>
            {currentUser ? (
              <button
                className="btn btn-ghost"
                onClick={() =>
                  document.getElementById("confirm-logout").showModal()
                }
              >
                Logout
              </button>
            ) : (
              <Link className="btn btn-ghost" to="/login">
                Login
              </Link>
            )}
            <ThemeController />
          </div>
        </div>
        <NotifyToast />
        <LogoutConfirm />
      </nav>
    </>
  );
};

export default Navbar;
