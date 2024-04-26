import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../context/authContext";
import { useLogin } from "../features/login/useLogin";

const Login = () => {
  const [inputs, setInput] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { mutate: userLogin } = useLogin();

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      login(inputs);

      userLogin(inputs, {
        onSuccess: () => navigate("/"),
        onError: (data) => toast.error(data.response.data.payload.message),
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.getElementById("username").focus();
  }, []);

  return (
    <>
      <main>
        <div className="h-screen flex flex-col items-center justify-center">
          <div className="w-full max-w-[450px] flex flex-col items-center justify-center gap-2">
            <div className="p-4 flex flex-col items-center justify-center">
              <h2 className="font-black text-3xl">Login</h2>
              <p className="mt-2">Write, discuss, learn.</p>
            </div>
            <form
              className="w-full flex flex-col items-center justify-center mt-2 gap-4"
              onSubmit={handleSubmit}
            >
              <label className="input input-bordered w-full flex items-center gap-2 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  id="username"
                  name="username"
                  type="text"
                  className="grow"
                  placeholder="Username"
                  onChange={handleChange}
                />
              </label>
              <label className="input input-bordered w-full flex items-center gap-2 rounded-lg mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="grow"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </label>
              <Button type={"submit"} width={"w-full"} message={"Login"} />
            </form>
            <p>
              Don't have account?{" "}
              <Link
                to={"/register"}
                className="font-bold text-primary transition-colors hover:text-secondary"
              >
                Register here.
              </Link>
            </p>
          </div>
        </div>
        <Toaster />
      </main>
    </>
  );
};

export default Login;
