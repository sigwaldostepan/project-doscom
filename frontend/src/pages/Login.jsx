import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
  };

  useEffect(() => {
    document.getElementById("email").focus();
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
              onSubmit={(e) => handleSubmit(e)}
            >
              <label className="input input-bordered w-full flex items-center gap-2 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  id="email"
                  type="text"
                  className="grow"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
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
                  type="password"
                  className="grow"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
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
      </main>
    </>
  );
};

export default Login;
