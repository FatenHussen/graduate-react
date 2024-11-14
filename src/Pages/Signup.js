import React, { useState } from "react";
import {
  BsEnvelope,
  BsPerson,
  BsKey,
  BsEye,
  BsEyeSlash,
  BsPhone,
  BsGenderAmbiguous,
  BsCalendar3,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Calander from "../Components/Calander";
import bg from "../Assets/Vector1.png";
import axios from "axios";

// Validation functions
export function validateEmail(email: string): boolean {
  return /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(email);
}

export function validatePassword(password: string): boolean {
  return password.length >= 8;
}

export function validateConfirmPassword(password: string, confirmPassword: string): boolean {
  return password === confirmPassword;
}

export function validateName(name: string): string {
  if (name.length < 3) {
    return 'Name too short';
  } else if (name.length > 255) {
    return 'Name too long';
  } else if (!/^[a-zA-Z0-9\u0600-\u06FF_ -]+$/.test(name)) {
    return 'Name must consist of letters, numbers, - or _ only';
  }
  return '';
}

const Signup = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [openCal, setOpenCal] = useState(false);
  const [loader, setLoader] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    phone: "",
    gender: "",
    birth_date: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      // Set the value to only numbers by replacing non-numeric characters with an empty string
      const numericValue = value.replace(/\D/g, '');
      setFormData((prevData) => ({ ...prevData, [name]: numericValue }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };
  

  const handleDateSelect = (date) => {
    setFormData((prevData) => ({ ...prevData, birth_date: date }));
  };

  const validateForm = () => {
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email) ? '' : 'Invalid email format';
    const passwordError = validatePassword(formData.password) ? '' : 'Password must be at least 8 characters';
    const confirmPasswordError = validateConfirmPassword(formData.password, formData.confirm_password)
      ? ''
      : 'Passwords do not match';

    setErrors({
      name: nameError,
      email: emailError,
      password: passwordError,
      confirm_password: confirmPasswordError,
    });

    return !(nameError || emailError || passwordError || confirmPasswordError);
  };

  const SignupURlAPI = 'http://127.0.0.1:8000/api/user/register';

  async function Signup() {
    if (!validateForm()) {
      return;
    }

    setLoader(true);
    try {
      const response = await axios.post(SignupURlAPI, {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.confirm_password,
        gender: formData.gender,
        phone_number: formData.phone,
        birthdate: formData.birth_date,
      });
      localStorage.setItem('email', formData.email);
      navigate('/verification');
    } catch (err) {
      console.error(err);
    } finally {
      setLoader(false);
    }
  }

  console.log(formData)

  return (
    <div className="w-full h-screen block md:flex">
      <div className="w-[45%] h-[100%] relative hidden md:block">
        <img src={bg} className="w-[60%] h-[100%] fixed -left-[10%] z-50" alt="bg" />
      </div>
      <div className="w-[100%] md:w-[55%] h-[100%] flex justify-center items-center relative">
        <div className="w-[90%] sm:w-[65%] h-[95%] md:absolute left-20 flex justify-center items-center flex-col">
          <h1 className="text-4xl sm:text-5xl font-thin text-[#0B74FA] mb-3 block md:hidden">Elegance Hub</h1>
          <h2 className="text-xl sm:text-3xl md:text-4xl">Creating new account</h2>
          <div className="w-[100%] h-[90%] flex justify-evenly items-center flex-col">
            <div className="w-[80%] h-14 relative">
              <input
                type="text"
                name="name"
                placeholder="Name"
                id="name"
                className="w-[100%] h-[100%] placeholder:text-[#474747] rounded-xl bg-[#F7F7F7] pl-10 py-2 pr-2 outline-none"
                onChange={handleInputChange}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              <label htmlFor="name" className="absolute left-2 top-[32%]">
                <BsPerson size={22} color="#474747" />
              </label>
            </div>

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

            <div className="w-[80%] h-14 relative">
              <input
                type={showConfirm ? "text" : "password"}
                name="confirm_password"
                placeholder="Confirm Password"
                id="confirm_password"
                className="w-[100%] h-[100%] placeholder:text-[#474747] rounded-xl bg-[#F7F7F7] pl-10 py-2 pr-10 outline-none"
                onChange={handleInputChange}
              />
              {errors.confirm_password && <p className="text-red-500 text-sm">{errors.confirm_password}</p>}
              <label htmlFor="confirm_password" className="absolute left-2 top-[32%]">
                <BsKey size={22} color="#474747" />
              </label>
              <label
                htmlFor="confirm_password"
                className="absolute right-2 top-[32%]"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? <BsEyeSlash size={22} color="#474747" /> : <BsEye size={22} color="#474747" />}
              </label>
            </div>

            <div className="w-[80%] h-14 relative">
              <input
                type="text"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                id="phone"
                className="w-[100%] h-[100%] placeholder:text-[#474747] rounded-xl bg-[#F7F7F7] pl-10 py-2 pr-2 outline-none"
                onChange={handleInputChange}
              />
              <label htmlFor="phone" className="absolute left-2 top-[32%]">
                <BsPhone size={22} color="#474747" />
              </label>
            </div>

            <div className="w-[80%] h-14  relative">
                        <div
                            name="date"
                            id="date"
                            className="w-[100%] h-[100%] rounded-xl bg-[#F7F7F7] pl-10 py-2 pr-2 outline-none relative"
                            onClick={() => setOpenCal(!openCal)}
                        >
                            <p className='absolute left-10 top-[30%] text-[#474747]'>{formData.birth_date}</p>
                            <Calander
                                onClose={() => setOpenCal(false)}
                                visible={openCal}
                                onDateSelect={handleDateSelect}
                            />
                        </div>
                        {formData.birth_date ? '' : <label
                            htmlFor="date"
                            className={`absolute left-10 top-[30%] text-[#474747]`}
                            onClick={() => setOpenCal(!openCal)}
                        >
                            Birth Date
                        </label>}
              <label htmlFor='phone' className='absolute left-2 top-[32%]'><BsCalendar3  size={22} color='#474747'/></label>
                    </div>

            <div className="w-[80%] h-14 relative">
              <select
                name="gender"
                id="gender"
                className="w-[100%] h-[100%] rounded-xl bg-[#F7F7F7] pl-10 py-2 pr-2 outline-none"
                onChange={handleInputChange}
              >
                <option value="" disabled selected>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <label htmlFor="gender" className="absolute left-2 top-[32%]">
                <BsGenderAmbiguous size={22} color="#474747" />
              </label>
            </div>

            <button
              className={`w-[80%] h-14 rounded-xl bg-[#0B74FA] text-white mt-4 ${
                loader ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={Signup}
              disabled={loader}
            >
              {loader ? (
                <div class="w-full gap-x-2 flex justify-center items-center">
                  <div class="w-3 bg-[#dbd5e9] animate-pulse h-3 rounded-full"></div>
                  <div class="w-3 animate-pulse h-3 bg-[#dbd5e9] rounded-full"></div>
                  <div class="w-3 h-3 animate-pulse bg-[#dbd5e9] rounded-full"></div>
                </div>
              ) : (
                "Sign up"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
