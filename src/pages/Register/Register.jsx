import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from "react-router-dom";

export default function Register() {
  let [isCallingApi, setIsCallingApi] = useState(false);

  let navigate = useNavigate();

  const initialValues = {
    Name: "",
    Phone: "",
    Email: "",
    Password: "",
    role: "Admin",
  };

  const validationSchema = Yup.object().shape({
    Name: Yup.string()
      .min(3, "min length is 3")
      .max(15, "max length is 15")
      .required("Required"),
    Phone: Yup.string()
      .matches(new RegExp("^01[0125][0-9]{8}$"), "Invalid Phone Number")
      .required("Required"),
    Email: Yup.string().email("Invalid Email").required("Required"),
    Password: Yup.string()
      .matches(new RegExp("^[A-Za-z0-9@#$%^&*!]{8,}$"), "Invalid Password")
      .required("Required"),
  });

  const registerForm = useFormik({
    initialValues,
    validationSchema,
    onSubmit: callRegister,
  });

  async function callRegister(values) {
    try {
      setIsCallingApi(true);
      let { data } = await axios.post(
        "https://e-commarce-website-eight.vercel.app/api/v1/auth/register",
        values
      );
      console.log("Registration successful:", data);
      setIsCallingApi(false);
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error.response?.data);
      setIsCallingApi(false);
    }
  }

  return (
    <div>
      <form
        onSubmit={registerForm.handleSubmit}
        className="max-w-md mx-auto mb-4"
      >
        <h1 className="text-3xl my-4 text-[#35AFA0]">Register Now :-</h1>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="Name"
            onBlur={registerForm.handleBlur}
            value={registerForm.values.Name}
            onChange={registerForm.handleChange}
            id="floating_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#35AFA0] focus:outline-none focus:ring-0 focus:border-[#35AFA0] peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#35AFA0] peer-focus:dark:text-[#35AFA0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name
          </label>
          {registerForm.errors.Name && registerForm.touched.Name ? (
            <div
              className="py-2 px-4 mb-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              {registerForm.errors.Name}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="tel"
            onBlur={registerForm.handleBlur}
            value={registerForm.values.Phone}
            onChange={registerForm.handleChange}
            name="Phone"
            id="floating_phone"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-[#35AFA0] peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_phone"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#35AFA0] peer-focus:dark:text-[#35AFA0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Phone number (123-456-7890)
          </label>
          {registerForm.errors.Phone && registerForm.touched.Phone ? (
            <div
              className="py-2 px-4 mb-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              {registerForm.errors.Phone}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="Email"
            id="floating_email"
            onBlur={registerForm.handleBlur}
            value={registerForm.values.Email}
            onChange={registerForm.handleChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#35AFA0] focus:outline-none focus:ring-0 focus:border-[#35AFA0] peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#35AFA0] peer-focus:dark:text-[#35AFA0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
          {registerForm.errors.Email && registerForm.touched.Email ? (
            <div
              className="py-2 px-4 mb-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              {registerForm.errors.Email}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="Password"
            onBlur={registerForm.handleBlur}
            value={registerForm.values.Password}
            onChange={registerForm.handleChange}
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:[#35AFA0] focus:outline-none focus:ring-0 focus:text-[#35AFA0] peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#35AFA0] peer-focus:dark:text-[#35AFA0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
          {registerForm.errors.Password && registerForm.touched.Password ? (
            <div
              className="py-2 px-4 mb-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              {registerForm.errors.Password}
            </div>
          ) : (
            ""
          )}
        </div>
        {isCallingApi ? (
          <div>
            <ClipLoader color="#35AFA0" />
          </div>
        ) : (
          <button
            type="submit"
            className="text-white bg-[#35AFA0] hover:bg-white hover:text-[#35AFA0] hover:focus:outline-[#35AFA0] focus:ring-4 focus:outline-none focus:ring-[#35AFA0] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#35AFA0] dark:hover:bg-[#35AFA0] dark:focus:ring-[#35AFA0]"
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
}
