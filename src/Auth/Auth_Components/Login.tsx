import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { RiAppleLine } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-xl rounded-[20px] p-8 md:p-12 shadow-lg bg-gradient-to-br from-[#cbd3f5] via-[#d8c1e7] to-[#f6d4df]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-black">
          <span className="text-black text-4xl">Log </span>
          <span className="text-[#8a63f8] text-4xl">In</span>
        </h2>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-black mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8a63f8] bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8a63f8] bg-white"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
              >
                {showPassword ? <FaEyeSlash className="w-6 text-[#8E6EFF]" /> : <FaEye className="w-6 text-[#8E6EFF]" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#b084f5] to-[#8a63f8] text-white font-medium py-3 rounded-full shadow-md hover:opacity-90 transition"
          >
            Log In
          </button>
        </form>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-gray-800 text-sm font-semi-bold">OR</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <div className="space-y-4">
          <button className="w-full flex items-center justify-center gap-2 bg-black text-white py-3 rounded-full">
            <FcGoogle className="h-6 w-6" />
            Continue With Google
          </button>

          <button className="w-full flex items-center justify-center gap-2 bg-black text-white py-3 rounded-full">
            <RiAppleLine className="w-6 h-6" />
            Continue With Apple
          </button>
        </div>

        <p className="text-center text-sm text-gray-700 mt-6">
          Don’t have an account?{' '}
          <Link to='/auth/signup' className="text-[#8a63f8] font-medium hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
