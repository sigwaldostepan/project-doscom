import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const LogoutConfirm = () => {
  const navigate = useNavigate();

  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();

    toast.success("You've been logged out successfully");

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <>
      <dialog
        id="confirm-logout"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-xl">Hold Up!</h3>
          <p className="py-4">
            You're about to log out. Are you sure you can handle the real world
            without us?
          </p>
          <div className="modal-action">
            <form
              method="dialog"
              className="text-md font-thin flex items-center gap-3"
            >
              <button className="px-4 py-2 text-md font-medium rounded-lg transition-colors hover:bg-neutral">
                No
              </button>
              <button
                className="px-4 py-2 text-md font-medium rounded-lg transition-colors hover:bg-red-600 hover:text-accent"
                onClick={handleLogout}
              >
                Yes
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default LogoutConfirm;
