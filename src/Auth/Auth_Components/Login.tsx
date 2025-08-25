import { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { RiAppleLine } from "react-icons/ri";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import video from "../../assets/6676845_Gradient_Banner_1920x1080.mp4";
import { AiFillTikTok } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { login } from "@/store/Slices/AuthSlice/authSlice";
import Cookies from "js-cookie";

type LoginInputs = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInputs>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data: LoginInputs) => {
    console.log(data);
    try {
      const response = await fetch("http://localhost:5000/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Login failed");

      const result = await response.json();
      console.log(result.user);

      // assuming API returns { user, token }
      dispatch(login(result.user));

      // ✅ store token in cookies (expires in 7 days, secure for HTTPS)
      Cookies.set("token", result.token, {
        expires: 7,
        secure: true,
        sameSite: "strict",
      });

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-2 sm:px-4 bg-white">
      <video
        className="absolute w-full max-w-lg blur-[180px] sm:max-w-xl md:max-w-2xl inset-0 mx-auto mt-32 h-4/5 my-auto object-cover z-0"
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative w-full max-w-sm md:max-w-lg lg:max-w-2xl rounded-xl p-4 sm:p-6 md:p-8 overflow-hidden shadow-[0_30px_30px_rgba(0,0,0,0.1)] border border-T-500/10 backdrop-blur-sm">
        <div className="absolute inset-0 shadow-xl z-10 backdrop-blur-sm" />

        <div className="relative z-20 px-16 py-5">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-black">
            <span>Log </span>
            <span className="text-[#8a63f8]">In</span>
          </h2>

          <form
            className="space-y-4 sm:space-y-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Email */}
            <div>
              <label className="block text-sm text-black mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: "Email is required" })}
                className="w-full px-3 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8a63f8] bg-white"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm text-black mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                  })}
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
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#b084f5] to-[#8a63f8] text-white font-medium py-2 sm:py-2.5 rounded-full text-sm shadow-md hover:opacity-90 transition mt-2 disabled:opacity-70"
            >
              {isSubmitting ? "Logging in..." : "Log In"}
            </button>
          </form>

          {/* Social logins */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-xs sm:text-sm text-gray-800 font-medium">
              OR
            </span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-2 bg-black text-white py-2 text-sm rounded-full">
              <AiFillTikTok className="w-5 h-5" />
              Continue With TikTok
            </button>

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
            <Link
              to="/auth/signup"
              className="text-[#8a63f8] font-medium hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
