import { useCallback } from "react";
import { useNavigate } from "react-router";


export default function SignupForm() {
  const navigate = useNavigate();

const handleOnClick = useCallback(() => {
  navigate("../signin");
}, [navigate]);


  return (
    <div className="max-w-screen-xl min-h-screen flex justify-center items-center mx-auto px-4">
      <div className="w-full max-w-4xl  bg-background  rounded-2xl shadow-2xl border-2 border-solid  grid grid-cols-1 md:grid-cols-2">
        {/* Input Section */}
        <div className="p-2">
          <div className="mb-2 mt-4 flex flex-col items-center justify-center p-4">
            <h1 className="text-4xl font-bold text-primary mb-1 flex flex-row items-center gap-5">
              <span className="text-2xl  rounded-xl w-10 h-10 flex items-center justify-center">
                <img src="./public/letter_t_logo.svg" alt="" />
              </span>
              Trendo
            </h1>
            <p className="text-center text-md p-4">
              Sign up to see photos and post from your friends.
            </p>
          </div>

          <div className="w-full flex flex-col items-stretch p-4">
            <form className="space-y-4">
              <div>
                <label className="text-primary text-lg block">Email</label>
                <input
                  type="email"
                  id="loginEmail"
                  pattern="^[a-zA-Z0-9._%+-]+@example\\.com$"
                  required
                  placeholder="Enter your email..."
                  className="w-full px-4 py-2 rounded focus:border-primary border border-border bg-transparent focus:outline-none"
                />
              </div>
              <div>
                <label className="text-primary text-lg block">Password</label>
                <input
                  type="password"
                  id="loginPassword"
                  required
                  placeholder="Enter your password..."
                  className="w-full px-4 py-2 rounded focus:border-primary border border-border bg-transparent focus:outline-none"
                />
              </div>
              <div>
                <label className="text-primary block">Name</label>
                <input
                  type="text"
                  id="name_lastName"
                  required
                  placeholder="Enter your Name..."
                  className="w-full px-4 py-2 rounded focus:border-primary border border-border bg-transparent focus:outline-none"
                />
              </div>
              <div>
                <label className="text-primary text-lg block">UserName</label>
                <input
                  type="text"
                  id="name_id"
                  required
                  placeholder="Enter your UserName..."
                  className="w-full px-4 py-2 rounded focus:border-primary border border-border bg-transparent focus:outline-none"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-28 bg-primary hover:bg-purple-400 text-white font-bold py-2 px-4 rounded border border-border"
                >
                  Sign-up
                </button>
              </div>
            </form>

            <p className="mt-6 text-center text-sm">
              Already have an account?{" "}
              <span onClick={handleOnClick}
                className="text-primary font-bold cursor-pointer hover:text-purple-400">Log in</span>
                
              
                  

              
            </p>
          </div>
        </div>

        {/* Left Image */}
        <div>
          <img
            className="hidden md:flex items-center justify-center  shadow-2xl  rounded-2xl h-full"
            src="./public/Image-Screen.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
