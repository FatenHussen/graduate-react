import React, { useState, useEffect } from 'react'
import { BsArrowLeft, BsEnvelope, BsEye, BsEyeSlash, BsKey } from "react-icons/bs";
import bg from '../Assets/Forget-password.jpeg'
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false)
    const [step, setStep] = useState(1)
    const [code, setCode] = useState(new Array(6).fill(''));
  const [timer, setTimer] = useState(20);
  const [loader, setLoader] = useState(true)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirm_password: '',

  });

  console.log('mm', formData)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
};

  useEffect(() => {
    if (timer > 0 && step === 2) {
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [timer, step]);

  console.log('pp',code)
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;
    const newCode = [...code];
    newCode[index] = element.value;
    setCode(newCode);
    // Move to the next input if a number is entered
    if (element.nextSibling && element.value !== '') {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Verification code submitted: ' + code.join(''));
  };

  return (
    <div className='w-screen h-screen bg-cover bg-center flex justify-center items-center relative' style={{ backgroundImage: `url(${bg})`}}>
        <Link to='/login' className='text-white flex justify-center items-center gap-1 absolute top-7 left-14 no-underline hover:underline'>
        <BsArrowLeft/>
        <p className='mt-[12px]'>Go back</p>
        </Link>
        <div className='w-[35%] h-[70%] bg-white rounded-3xl drop-shadow-lg shadow-black flex justify-center items-center'>
            {step === 1 ? (
                <div className='w-[80%] h-[80%] flex justify-evenly items-center flex-col'>
                    <h2 className='text-xl'>Please enter your E-mail</h2>
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
              <button className='w-[80%] h-12 rounded-xl text-white bg-[#0B74FA] hover:bg-[#0b73fad6] transition ease-in-out delay-50' onClick={()=>setStep(2)} disabled={loader}>
              {loader ? <div class="w-full gap-x-2 flex justify-center items-center">
  <div
    class="w-3 bg-[#dbd5e9] animate-pulse h-3 rounded-full"
  ></div>
  <div
    class="w-3 animate-pulse h-3 bg-[#dbd5e9] rounded-full"
  ></div>
  <div
    class="w-3 h-3 animate-pulse bg-[#dbd5e9] rounded-full"
  ></div>
</div> : 'Next'}
              </button>
                </div>
            ) : step === 2 ? (
                <div className='w-[80%] h-[80%] flex justify-evenly items-center flex-col'>
                    <h2 className='text-xl text-center'>We send a verification code to <span>redaalkweifati@gmail.com</span></h2>
                    <div className="w-[90%] h-14  flex justify-center items-center gap-4">
                    {code.map((num, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={num}
                onChange={(e) => handleChange(e.target, index)}
                className="w-12 h-12 text-center bg-[#F7F7F7] rounded focus:outline-none focus:border-2 focus:border-blue-500"
              />
            ))}
    
            </div>
            {timer > 0 ? (
              <p className="text-sm text-gray-600">
                Resend code in 0:{timer.toString().padStart(2, '0')}
              </p>
            ) : (
              <button
                type="button"
                onClick={() => setTimer(20)}
                className="text-blue-500 hover:underline"
              >
                Resend code
              </button>
            )}
              <button className='w-[80%] h-12 rounded-xl text-white bg-[#0B74FA] hover:bg-[#0b73fad6] transition ease-in-out delay-50' onClick={()=>setStep(3)} disabled={loader}>
              {loader ? <div class="w-full gap-x-2 flex justify-center items-center">
  <div
    class="w-3 bg-[#dbd5e9] animate-pulse h-3 rounded-full"
  ></div>
  <div
    class="w-3 animate-pulse h-3 bg-[#dbd5e9] rounded-full"
  ></div>
  <div
    class="w-3 h-3 animate-pulse bg-[#dbd5e9] rounded-full"
  ></div>
</div> : 'Verify'}
              </button>
                </div>
            ) : (
                <div className='w-[80%] h-[80%] flex justify-evenly items-center flex-col'>
                    <h2 className='text-xl'>Let’s reset you password</h2>
                    <div className='w-[90%] h-14  relative'>
              <input type={showPass ? 'text' : 'password'} name='password' placeholder='Password' id='password' className='w-[100%] h-[100%] placeholder:text-[#474747] rounded-xl bg-[#F7F7F7] pl-10 py-2 pr-10 outline-none ' onChange={handleInputChange}/>
              <label htmlFor='password' className='absolute left-2 top-[32%]'><BsKey  size={22} color='#474747'/></label>
              <label htmlFor='password' className='absolute right-2 top-[32%]' onClick={()=>setShowPass(!showPass)}>{showPass ? <BsEyeSlash  size={22} color='#474747'/> : <BsEye  size={22} color='#474747'/>}</label>
            </div>

            <div className='w-[90%] h-14  relative'>
              <input type={showConfirm ? 'text' : 'password'} name='confirm_password' placeholder='confirm Password' id='confrim_password' className='w-[100%] h-[100%] placeholder:text-[#474747] rounded-xl bg-[#F7F7F7] pl-10 py-2 pr-10 outline-none ' onChange={handleInputChange}/>
              <label htmlFor='confirm_password' className='absolute left-2 top-[32%]'><BsKey  size={22} color='#474747'/></label>
              <label htmlFor='confirm_password' className='absolute right-2 top-[32%]' onClick={()=>setShowConfirm(!showConfirm)}>{showConfirm ? <BsEyeSlash  size={22} color='#474747'/> : <BsEye  size={22} color='#474747'/>}</label>
            </div>
              <button className='w-[80%] h-12 rounded-xl text-white bg-[#0B74FA] hover:bg-[#0b73fad6] transition ease-in-out delay-50' disabled={loader}>
              {loader ? <div class="w-full gap-x-2 flex justify-center items-center">
  <div
    class="w-3 bg-[#dbd5e9] animate-pulse h-3 rounded-full"
  ></div>
  <div
    class="w-3 animate-pulse h-3 bg-[#dbd5e9] rounded-full"
  ></div>
  <div
    class="w-3 h-3 animate-pulse bg-[#dbd5e9] rounded-full"
  ></div>
</div> : 'Reset Password'}
              </button>
                </div>
            )}
        </div>
    </div>
  )
}

export default ForgotPassword