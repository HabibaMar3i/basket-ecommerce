import axios from "axios"
import { useFormik } from "formik"
import { useContext, useState } from "react"
import * as Yup from 'yup'
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate, Link } from "react-router-dom";
import { tokenContext } from "../../components/context/tokenContext";
import { toast } from "react-toastify";



export default function Login() {
    let [isCallingApi, setIsCallingApi] = useState(false)
    let [showPassword, setShowPassword] = useState(false)

    let navigate = useNavigate()

    let { token, setToken } = useContext(tokenContext)
    console.log(token, 'token login value')



    const initialValues = {
        Phone: '',
        Password: '',
    }

    const validationSchema = Yup.object().shape({
        Phone: Yup.string()
            .matches(/^01[0125][0-9]{8}$/, "Should be 11 numbers")
            .required("Required"),
        Password: Yup.string()
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!]).{8,}$/,
                "Should include uppercase, lowercase, number & symbol"
            )
            .required("Required"),
    })

    const loginForm = useFormik({
        initialValues,
        validationSchema,
        onSubmit: callLogin
    })

    async function callLogin(values) {
        try {
            setIsCallingApi(true)
            let { data } = await axios.post(
                "https://e-commarce-website-eight.vercel.app/api/v1/auth/login",
                values
            );
            toast.success("Login successful 🎉");
            setIsCallingApi(false)

            localStorage.setItem('userToken', data.AccessToken)
            setToken(data.AccessToken)
            navigate('/')

        } catch (error) {
            const errorMessage = error.response?.data?.message || "Login failed. Please check your credentials.";
            toast.error(errorMessage);
            setIsCallingApi(false)
        }
    }

    return (
        <div>
            <form onSubmit={loginForm.handleSubmit} className="max-w-md mx-auto mb-4">
                <h1 className="text-3xl my-4 text-[#35AFA0]">Login Now :-</h1>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="tel" onBlur={loginForm.handleBlur} value={loginForm.values.Phone} onChange={loginForm.handleChange} name="Phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-[#35AFA0] peer" placeholder=" " required />
                    <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#35AFA0] peer-focus:dark:text-[#35AFA0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
                    {loginForm.errors.Phone && loginForm.touched.Phone ?
                        <div className="py-2 px-4 mb-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                            {loginForm.errors.Phone}
                        </div> : ''}
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type={showPassword ? "text" : "password"}
                        name="Password"
                        id="floating_password"
                        onBlur={loginForm.handleBlur}
                        value={loginForm.values.Password}
                        onChange={loginForm.handleChange}
                        className="block py-2.5 px-0 w-full text-sm text-[#35AFA0] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:border-[#35AFA0] focus:outline-none focus:ring-0 peer"
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="floating_password"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-[#35AFA0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Password
                    </label>
                    {loginForm.errors.Password && loginForm.touched.Password && (
                        <div
                            className="py-2 px-4 mb-2 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                            role="alert"
                        >
                            {loginForm.errors.Password}
                        </div>
                    )}
                    <div className="flex items-center mt-4">
                        <input
                            id="showPassword"
                            type="checkbox"
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                            className="w-4 h-4 text-[#35AFA0] border-gray-300 rounded focus:ring-[#35AFA0]"
                        />
                        <label
                            htmlFor="showPassword"
                            className="ml-2 text-sm  text-gray-700 dark:text-gray-300 cursor-pointer"
                        >
                            Show Password
                        </label>
                    </div>
                </div>

                {isCallingApi ? <div>
                    <ClipLoader color="#35AFA0" />
                </div> : <button type="submit" className="text-white text-center bg-[#35AFA0] hover:bg-white hover:text-[#35AFA0] hover:focus:outline-[#35AFA0] focus:ring-4 focus:outline-none focus:ring-[#35AFA0] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#35AFA0] dark:hover:bg-[#35AFA0] dark:focus:ring-[#35AFA0]">Login</button>
                }
                <div className="text-start my-5">
                    <p className="text-xs">Do Not Have An Account:- <Link className="text-md font-semibold" to='/register'>Register</Link></p>
                </div>
            </form>
        </div>
    )
}


//phone : 01015647934
//pass : Ha34@#52