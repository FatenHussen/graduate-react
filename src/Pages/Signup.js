//TODO
//1- Responsive
//2- Error Handling
//3- Verification after signing up
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
import Calander from "../Components/Calander";
import bg from "../Assets/Vector1.png";

const Signup = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [openCal, setOpenCal] = useState(false);
  const [loader, setLoader] = useState(true);
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
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDateSelect = (date) => {
    setFormData((prevData) => ({ ...prevData, birth_date: date }));
  };

  console.log("ss", formData);

  return (
    <div className="w-full h-screen block md:flex">
      <div className="w-[45%] h-[100%] relative hidden md:block">
        <img
          src={bg}
          className="w-[60%] h-[100%] fixed -left-[10%] z-50"
          alt="bg"
        />
      </div>
      <div className="w-[100%] md:w-[55%] h-[100%] flex justify-center items-center relative">
        <div className="w-[90%] sm:w-[65%] h-[95%] md:absolute left-20 flex justify-center items-center flex-col ">
      <h1 className="text-4xl sm:text-5xl font-thin text-[#0B74FA] mb-3 block md:hidden">Elegance Hub</h1>
          <h2 className="text-xl sm:text-3xl md:text-4xl">Creating new account</h2>
          <div className="w-[100%] h-[90%] flex justify-evenly items-center flex-col">
            <div className="w-[80%] h-14  relative">
              <input
                type="text"
                name="name"
                placeholder="Name"
                id="name"
                className="w-[100%] h-[100%] placeholder:text-[#474747] rounded-xl bg-[#F7F7F7] pl-10 py-2 pr-2 outline-none "
                onChange={handleInputChange}
              />
              <label htmlFor="name" className="absolute left-2 top-[32%]">
                <BsPerson size={22} color="#474747" />
              </label>
            </div>

            <div className="w-[80%] h-14  relative">
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                id="email"
                className="w-[100%] h-[100%] placeholder:text-[#474747] rounded-xl bg-[#F7F7F7] pl-10 py-2 pr-2 outline-none "
                onChange={handleInputChange}
              />
              <label htmlFor="email" className="absolute left-2 top-[32%]">
                <BsEnvelope size={22} color="#474747" />
              </label>
            </div>

            <div className="w-[80%] h-14  relative">
              <input
                type={showPass ? "text" : "password"}
                name="password"
                placeholder="Password"
                id="password"
                className="w-[100%] h-[100%] placeholder:text-[#474747] rounded-xl bg-[#F7F7F7] pl-10 py-2 pr-10 outline-none "
                onChange={handleInputChange}
              />
              <label htmlFor="password" className="absolute left-2 top-[32%]">
                <BsKey size={22} color="#474747" />
              </label>
              <label
                htmlFor="password"
                className="absolute right-2 top-[32%]"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? (
                  <BsEyeSlash size={22} color="#474747" />
                ) : (
                  <BsEye size={22} color="#474747" />
                )}
              </label>
            </div>

            <div className="w-[80%] h-14  relative">
              <input
                type={showConfirm ? "text" : "password"}
                name="confrim_password"
                placeholder="Confrim Password"
                id="confrim_password"
                className="w-[100%] h-[100%] placeholder:text-[#474747] rounded-xl bg-[#F7F7F7] pl-10 py-2 pr-10 outline-none "
                onChange={handleInputChange}
              />
              <label
                htmlFor="confrim_password"
                className="absolute left-2 top-[32%]"
              >
                <BsKey size={22} color="#474747" />
              </label>
              <label
                htmlFor="confrim_password"
                className="absolute right-2 top-[32%]"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? (
                  <BsEyeSlash size={22} color="#474747" />
                ) : (
                  <BsEye size={22} color="#474747" />
                )}
              </label>
            </div>

            <div className="w-[80%] h-14  relative">
              <input
                type="text"
                name="phone"
                placeholder="Phone number"
                id="phone"
                className="w-[100%] h-[100%] placeholder:text-[#474747] rounded-xl bg-[#F7F7F7] pl-10 py-2 pr-2 outline-none "
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
                <p className="absolute left-10 top-[30%] text-[#474747]">
                  {formData.birth_date}
                </p>
                <Calander
                  onClose={() => setOpenCal(false)}
                  visible={openCal}
                  onDateSelect={handleDateSelect}
                />
              </div>
              {formData.birth_date ? (
                ""
              ) : (
                <label
                  htmlFor="date"
                  className={`absolute left-10 top-[30%] text-[#474747]`}
                  onClick={() => setOpenCal(!openCal)}
                >
                  Birth Date
                </label>
              )}
              <label htmlFor="phone" className="absolute left-2 top-[32%]">
                <BsCalendar3 size={22} color="#474747" />
              </label>
            </div>

            <div className="w-[80%] h-14  relative">
              <select
                id="gender"
                name="gender"
                class="w-[100%] h-[100%] rounded-xl bg-[#F7F7F7] pl-10 py-2 pr-2 outline-none "
                value={formData.gender}
                onChange={handleInputChange}
              >
                <option value=""></option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              {formData.gender ? (
                ""
              ) : (
                <label
                  for="gender"
                  class={`absolute left-10 top-[30%] text-[#474747]`}
                >
                  Gender
                </label>
              )}
              <label htmlFor="phone" className="absolute left-2 top-[32%]">
                <BsGenderAmbiguous size={22} color="#474747" />
              </label>
            </div>
          </div>
          <div className="w-[100%] flex justify-center items-center flex-col gap-1">
            <button className="w-[80%] h-12 rounded-xl text-white bg-[#0B74FA] hover:bg-[#0b73fad6] transition ease-in-out delay-50">
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
            <p className="text-lg">
              Already have an account?
              <a
                href="/login"
                className="text-[#0B74FA] hover:text-[#0b73faa5]"
              >
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
