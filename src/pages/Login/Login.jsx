import axios from "axios";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import * as Yup from "yup";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate, Link } from "react-router-dom";
import { tokenContext } from "../../components/context/tokenContext";
import axiosInstance from "../../axiosInstance";

export default function Login() {
    let [isCallingApi, setIsCallingApi] = useState(false);

    let navigate = useNavigate();

    let { token, setToken } = useContext(tokenContext);
    console.log(token, "token login value");

    const initialValues = {
        Phone: "",
        Password: "",
    };

    const validationSchema = Yup.object().shape({
        Phone: Yup.string()
            .matches(new RegExp("^01[0125][0-9]{8}$"), "Invalid Phone Number")
            .required("Required"),
        Password: Yup.string()
            .matches(new RegExp("^[A-Za-z0-9@#$%^&*!]{8,}$"), "Invalid Password")
            .required("Required"),
    });

    const loginForm = useFormik({
        initialValues,
        validationSchema,
        onSubmit: callLogin,
    });

    async function callLogin(values) {
        try {
            setIsCallingApi(true);
            const domain = process.env.NODE_ENV === 'production' ? '' : 'https://e-commarce-website-eight.vercel.app';
            let { data } = await axiosInstance.post(`/auth/login`, values);
            console.log("Login successful:", data);
            setIsCallingApi(false);

            localStorage.setItem("userToken", data.AccessToken);
            localStorage.setItem("refreshToken", data.RefreshToken);
            localStorage.setItem("userData", JSON.stringify(data.user));
            setToken(data.AccessToken);
            navigate("/");
        } catch (error) {
            console.error("Login error:", error.response?.data);
            setIsCallingApi(false);

        }

    }
    return (
        <div>
            <form onSubmit={loginForm.handleSubmit} className="max-w-md mx-auto mb-4">
                <h1 className="text-3xl my-4 text-[#35AFA0]">Login Now :-</h1>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="tel"
                        onBlur={loginForm.handleBlur}
                        value={loginForm.values.Phone}
                        onChange={loginForm.handleChange}
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
                    {loginForm.errors.Phone && loginForm.touched.Phone ? (
                        <div
                            className="py-2 px-4 mb-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                            role="alert"
                        >
                            {loginForm.errors.Phone}
                        </div>
                    ) : (
                        ""
                    )}
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="password"
                        name="Password"
                        onBlur={loginForm.handleBlur}
                        value={loginForm.values.Password}
                        onChange={loginForm.handleChange}
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
                    {loginForm.errors.Password && loginForm.touched.Password ? (
                        <div
                            className="py-2 px-4 mb-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                            role="alert"
                        >
                            {loginForm.errors.Password}
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
                        Login
                    </button>
                )}
            </form>
        </div>
    );
}

//phone : 01015647934
//pass : Ha34@#52
