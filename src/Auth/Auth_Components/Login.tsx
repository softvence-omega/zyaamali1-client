import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { RiAppleLine } from "react-icons/ri";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import video from "../../assets/6676845_Gradient_Banner_1920x1080.mp4";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
 const handleClick = () => {
    navigate("/dashboard");
  };
  return (
    <div className="flex items-center justify-center min-h-screen px-2 sm:px-4 bg-white">
      {/* Login Box */}
      <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg rounded-[20px] p-4 sm:p-6 md:p-8 overflow-hidden bg-gradient-to-br from-[#eef1ff] via-[#e9ddfa] to-[#ffe7f2] shadow-[0_15px_80px_rgba(130,112,255,0.2)] border border-white/30 backdrop-blur-sm">

        {/* Form Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* White overlay for frosted glass effect */}
        <div className="absolute inset-0 bg-white/40 z-10 backdrop-blur-sm" />

        {/* Form content */}
        <div className="relative z-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-black">
            <span>Log </span>
            <span className="text-[#8a63f8]">In</span>
          </h2>

          <form className="space-y-4 sm:space-y-5">
            <div>
              <label className="block text-sm text-black mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8a63f8] bg-white"
              />
            </div>

            <div>
              <label className="block text-sm text-black mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full px-3 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8a63f8] bg-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
                >
                  {showPassword ? (
                    <FaEyeSlash className="w-4 h-4 text-[#8E6EFF]" />
                  ) : (
                    <FaEye className="w-4 h-4 text-[#8E6EFF]" />
                  )}
                </button>
              </div>
            </div>

            <button
            onClick={handleClick}
              type="submit"
              className="w-full bg-gradient-to-r from-[#b084f5] to-[#8a63f8] text-white font-medium py-2 sm:py-2.5 rounded-full text-sm shadow-md hover:opacity-90 transition mt-2"
            >
              Log In
            </button>
          </form>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-xs sm:text-sm text-gray-800 font-medium">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-2 bg-black text-white py-2 text-sm rounded-full">
              <FcGoogle className="w-5 h-5" />
              Continue With Google
            </button>

            <button className="w-full flex items-center justify-center gap-2 bg-black text-white py-2 text-sm rounded-full">
              <RiAppleLine className="w-5 h-5" />
              Continue With Apple
            </button>
          </div>

          <p className="text-center text-xs sm:text-sm text-gray-700 mt-4">
            Don’t have an account?{" "}
            <Link to="/auth/signup" className="text-[#8a63f8] font-medium hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
