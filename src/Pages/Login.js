//TODO
//1- Responsive
//2- Error Handling

import React, { useState } from "react";
import { BsEnvelope, BsKey, BsEye, BsEyeSlash } from "react-icons/bs";
import bg from "../Assets/Vector1.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function validateEmail(email: string): boolean {
  return /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(email);
}

export function validatePassword(password: string): boolean {
  return password.length >= 8;
}

const Login = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const validateForm = () => {
    const emailError = validateEmail(formData.email) ? '' : 'Invalid email format';
    const passwordError = validatePassword(formData.password) ? '' : 'Password must be at least 8 characters';

    setErrors({
      email: emailError,
      password: passwordError,
    });

    return !( emailError || passwordError );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const LoginURlAPI = 'http://127.0.0.1:8000/api/user/login';

  async function Login() {
    if (!validateForm()) {
      return;
    }

    setLoader(true);
    try {
      const response = await axios.post(LoginURlAPI, {
        email: formData.email,
        password: formData.password,
      });
      console.log('pp',response.data.data.token)
      localStorage.setItem('token', response.data.data.token);
      navigate('/');
    } catch (err) {
      console.error(err);
    } finally {
      setLoader(false);
    }
  }

  console.log("ss", formData);

  return (
    <div className="w-full h-screen block md:flex">
      <div className="w-[100%] md:w-[55%] h-[100%] flex justify-center items-center relative">
        <div className="w-[90%] sm:w-[65%] h-[95%] md:absolute left-20 flex justify-center items-center flex-col ">
      <h1 className="text-4xl sm:text-5xl font-thin text-[#0B74FA] mb-3 block md:hidden">Elegance Hub</h1>
          <h2 className="text-xl sm:text-3xl md:text-4xl">Get full access to the web</h2>
          <div className="w-[100%] h-[50%] flex justify-center items-center gap-12 flex-col">
          <div className="w-[80%] h-14 relative">
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                id="email"
                className="w-[100%] h-[100%] placeholder:text-[#474747] rounded-xl bg-[#F7F7F7] pl-10 py-2 pr-2 outline-none"
                onChange={handleInputChange}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              <label htmlFor="email" className="absolute left-2 top-[32%]">
                <BsEnvelope size={22} color="#474747" />
              </label>
            </div>

            <div className="w-[80%] h-14 relative">
              <input
                type={showPass ? "text" : "password"}
                name="password"
                placeholder="Password"
                id="password"
                className="w-[100%] h-[100%] placeholder:text-[#474747] rounded-xl bg-[#F7F7F7] pl-10 py-2 pr-10 outline-none"
                onChange={handleInputChange}
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              <label htmlFor="password" className="absolute left-2 top-[32%]">
                <BsKey size={22} color="#474747" />
              </label>
              <label
                htmlFor="password"
                className="absolute right-2 top-[32%]"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <BsEyeSlash size={22} color="#474747" /> : <BsEye size={22} color="#474747" />}
              </label>
            </div>

            <div className="w-[80%] -mt-10 flex justify-between">
              <div className="h-7 flex justify-center items-center gap-1">
                <input type="checkbox" name="remember_me" id="remember_me" />
                <label htmlFor="remember_me" className="h-fit text-black ">
                  Remember me
                </label>
              </div>
              <a
                href="/forgot-password"
                className="h-fit text-black no-underline hover:underline"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <div className="w-[100%] flex justify-center items-center flex-col gap-1">
            <button
                          onClick={Login}
                          disabled={loader}
                           className="w-[80%] h-12 rounded-xl text-white bg-[#0B74FA] hover:bg-[#0b73fad6] transition ease-in-out delay-50">
              {loader ? (
                <div class="w-full gap-x-2 flex justify-center items-center">
                  <div class="w-3 bg-[#dbd5e9] animate-pulse h-3 rounded-full"></div>
                  <div class="w-3 animate-pulse h-3 bg-[#dbd5e9] rounded-full"></div>
                  <div class="w-3 h-3 animate-pulse bg-[#dbd5e9] rounded-full"></div>
                </div>
              ) : (
                "Log in"
              )}
            </button>
            <p className="text-lg">
              Don’t have an account?
              <a
                href="/signup"
                className="text-[#0B74FA] hover:text-[#0b73faa5]"
              >
                create one
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="w-[45%] h-[100%] relative hidden md:block">
        <img
          src={bg}
          className="w-[65%] h-[100%] fixed -right-[10%] z-50"
          alt="bg"
        />
      </div>
    </div>
  );
};

export default Login;
