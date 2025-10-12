import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { RiAppleLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import video from "../../assets/6676845_Gradient_Banner_1920x1080.mp4";
import { countries } from "@/utils/Countries";

type SignupInputs = {
  fullName: string;
  companyName: string;
  country: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SignupInputs>();

  const navigate = useNavigate();

  const onSubmit = async (data: SignupInputs) => {
    console.log(data);

    try {
      const response = await fetch(
        "https://zyaamali1-backend.onrender.com/api/v1/user/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      console.log(result);

      if (!response.ok) {
        const errorMessage =
          result?.message || "Signup failed. Please try again.";
        throw new Error(errorMessage);
      }

      console.log("Signup success:", result);
      reset();
      navigate("/auth/login");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Signup error:", error);
      alert(error.message || "Signup failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-2 sm:px-4 bg-white">
      <video
        className="absolute w-full max-w-lg blur-[150px] sm:max-w-xl md:max-w-2xl inset-0 mx-auto mt-24 h-5/6 my-auto object-cover z-0"
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative w-full max-w-sm md:max-w-lg lg:max-w-2xl rounded-[20px] p-4 sm:p-6 md:p-8 overflow-hidden shadow-[0_30px_30px_rgba(0,0,0,0.1)] border border-T-500/10 backdrop-blur-sm">
        <div className="absolute inset-0 shadow-xl z-10 backdrop-blur-sm" />

        <div className="relative z-20 px-16 py-5">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-black">
            <span className="text-black">Sign</span>
            <span className="text-[#8a63f8]">Up</span>
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                {...register("fullName", { required: "Full name is required" })}
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8a63f8] bg-white text-sm"
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Enter your company name"
                {...register("companyName", {
                  required: "Company name is required",
                })}
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8a63f8] bg-white text-sm"
              />
              {errors.companyName && (
                <p className="text-red-500 text-xs">
                  {errors.companyName.message}
                </p>
              )}
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Country
              </label>
              {/* <select
                {...register("country", { required: "Country is required" })}
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8a63f8] bg-white text-sm"
              >
                <option value="">Select country</option>
                <option value="bangladesh">Bangladesh</option>
                <option value="india">India</option>
                <option value="usa">USA</option>
              </select> */}
              <select
                {...register("country", { required: "Country is required" })}
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8a63f8] bg-white text-sm"
              >
                <option value="">Select country</option>
                {countries.map((country) => (
                  <option key={country.id} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
              {errors.country && (
                <p className="text-red-500 text-xs">{errors.country.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email format",
                  },
                })}
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8a63f8] bg-white text-sm"
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8a63f8] bg-white text-sm"
              />
              {errors.password && (
                <p className="text-red-500 text-xs">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Re-enter your password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8a63f8] bg-white text-sm"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#b084f5] to-[#8a63f8] text-white font-medium py-2 text-sm rounded-full shadow-xl hover:opacity-90 transition mt-2 disabled:opacity-70"
            >
              {isSubmitting ? "Signing Up..." : "Sign Up"}
            </button>

            {/* OR divider */}
            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-2 text-xs sm:text-sm text-gray-800 font-medium">
                OR
              </span>
              <hr className="flex-grow border-gray-300" />
            </div>

            {/* Social signups */}
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
              Already have an account?{" "}
              <Link
                to="/auth/login"
                className="text-[#8a63f8] font-medium hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
