import React,{ useState, useEffect } from 'react'
import bg from "../Assets/Forget-password.jpeg";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Verification = () => {
  const navigate = useNavigate()
    const [code, setCode] = useState(new Array(6).fill(""));
    const [timer, setTimer] = useState(20);
    const [loader, setLoader] = useState(false);
    const email = localStorage.getItem('email')

    useEffect(() => {
        if (timer > 0) {
          const countdown = setInterval(() => {
            setTimer((prev) => prev - 1);
          }, 1000);
          return () => clearInterval(countdown);
        }
      }, [timer]);

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;
        const newCode = [...code];
        newCode[index] = element.value;
        setCode(newCode);
        // Move to the next input if a number is entered
        if (element.nextSibling && element.value !== "") {
          element.nextSibling.focus();
        }
      };

      const VerificationURlAPI = 'http://127.0.0.1:8000/api/user/verify_otp';

      async function verification() {
        setLoader(true);
        try {
          const codeString = code.join(''); // Join the array elements into a single string
          const response = await axios.post(VerificationURlAPI, {
            email: email,
            code: codeString, // Send the code as a string
          });
          navigate('/login');
        } catch (err) {
          console.error(err);
        } finally {
          setLoader(false);
        }
      }

  console.log(code)

  return (
    <div
      className="w-screen h-screen bg-cover bg-center flex justify-center items-center relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-[35%] h-[70%] bg-white rounded-3xl drop-shadow-lg shadow-black flex justify-center items-center">
    <div className="w-[80%] h-[80%] flex justify-evenly items-center flex-col">
            <h2 className="text-xl text-center">
              We send a verification code to{" "}
              <span>{email}</span>
            </h2>
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
                Resend code in 0:{timer.toString().padStart(2, "0")}
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
            <button
              className="w-[80%] h-12 rounded-xl text-white bg-[#0B74FA] hover:bg-[#0b73fad6] transition ease-in-out delay-50"
              disabled={loader}
              onClick={verification}
            >
              {loader ? (
                <div class="w-full gap-x-2 flex justify-center items-center">
                  <div class="w-3 bg-[#dbd5e9] animate-pulse h-3 rounded-full"></div>
                  <div class="w-3 animate-pulse h-3 bg-[#dbd5e9] rounded-full"></div>
                  <div class="w-3 h-3 animate-pulse bg-[#dbd5e9] rounded-full"></div>
                </div>
              ) : (
                "Verify"
              )}
            </button>
          </div>
          </div>
          </div>
          
  )
}

export default Verification