// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { CiSquarePlus } from "react-icons/ci";
// import { useNavigate } from "react-router-dom";

// const signupSchema = z.object({
//   name: z.string().min(2, "Name must be at least 2 characters"),
//   email: z.string().email("Invalid email format"),
//   password: z.string().min(6, "Password must be at least 6 characters"),
//   image: z
//     .any()
//     .refine((file) => file, "Image is required")
//     .optional(),
// });

// type SignupFormInputs = z.infer<typeof signupSchema>;

// const Signup = () => {
//   const [preview, setPreview] = useState<string | null>(null);
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//   } = useForm<SignupFormInputs>({
//     resolver: zodResolver(signupSchema),
//   });

//   const navigate = useNavigate();

//   const onSubmit = (data: SignupFormInputs) => {
//     const formData = new FormData();
//     formData.append("name", data.name);
//     formData.append("email", data.email);
//     formData.append("password", data.password);
//     if (selectedFile) formData.append("image", selectedFile);

//     console.log("Signup Data:", Object.fromEntries(formData));
//     navigate("/login");
//   };

//   const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       setPreview(URL.createObjectURL(file));
//       setSelectedFile(file);
//       setValue("image", file, { shouldValidate: true });
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-200">
//       <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-semibold text-center">Signup</h2>
//         <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
//           {/* Name Field */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               Name
//             </label>
//             <input
//               type="text"
//               {...register("name")}
//               className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             {errors.name && (
//               <p className="text-red-500 text-sm">{errors.name.message}</p>
//             )}
//           </div>

//           {/* Email Field */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               {...register("email")}
//               className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             {errors.email && (
//               <p className="text-red-500 text-sm">{errors.email.message}</p>
//             )}
//           </div>

//           {/* Password Field */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               {...register("password")}
//               className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             {errors.password && (
//               <p className="text-red-500 text-sm">{errors.password.message}</p>
//             )}
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               Profile Picture
//             </label>
//             {/* input box  */}
//             <div
//               className="relative w-full h-36 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center cursor-pointer hover:border-blue-500 transition"
//               onClick={() => document.getElementById("fileInput")?.click()}
//             >
//               {preview ? (
//                 <img
//                   src={preview}
//                   alt="Preview"
//                   className="absolute inset-0 w-full h-full object-cover rounded-lg"
//                 />
//               ) : (
//                 <div className="flex flex-col items-center text-gray-500">
//                   <CiSquarePlus className="h-12 w-12" />
//                   <p className="text-sm">Click to upload</p>
//                 </div>
//               )}
//             </div>
//             <input
//               type="file"
//               accept="image/*"
//               id="fileInput"
//               className="hidden"
//               onChange={handleImageChange}
//             />
//             {errors.image?.message &&
//               typeof errors.image.message === "string" && (
//                 <p className="text-red-500 text-sm mt-1">
//                   {errors.image.message}
//                 </p>
//               )}
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
//           >
//             Signup
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { RiAppleLine } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import video from "../../assets/6676845_Gradient_Banner_1920x1080.mp4";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);

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
      {/* Login Box */}
      <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg rounded-[20px] p-4 sm:p-6 md:p-8 overflow-hidden shadow-[0_30px_30px_rgba(0,0,0,0.1)] border border-T-500/10 backdrop-blur-sm">
        {/* Form Background Video */}

        {/* White overlay for frosted glass effect */}
        <div className="absolute inset-0 shadow-xl z-10 backdrop-blur-sm" />

        {/* Form content */}
        <div className="relative z-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-black">
            <span className="text-black">Sign</span>
            <span className="text-[#8a63f8]">Up</span>
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="your name"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8a63f8] bg-white text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Company Name
              </label>
              <input
                type="text"
                placeholder="company name"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8a63f8] bg-white text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Country
              </label>
              <select className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8a63f8] bg-white text-sm">
                <option value=""></option>
                <option value="bangladesh">Bangladesh</option>
                <option value="india">India</option>
                <option value="usa">USA</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8a63f8] bg-white text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8a63f8] bg-white text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
                >
                  {showPassword ? (
                    <FaEyeSlash className="w-4 h-4 text-[#8E6EFF]" />
                  ) : (
                    <FaEye className="w-4 h-4 text-[#8E6EFF]" />
                  )}
                </button>
              </div>
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
              Already have an account?{" "}
              <Link
                to="/auth/login"
                className="text-[#8a63f8] font-medium hover:underline"
              >
                Login
              </Link>
            </p>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#b084f5] to-[#8a63f8] text-white font-medium py-2 text-sm rounded-full shadow-xl hover:opacity-90 transition mt-2"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

////////
