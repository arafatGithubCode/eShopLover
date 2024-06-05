import { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Signin = () => {
  const [successMsg, setSuccessMsg] = useState("");

  const [formData, setFormData] = useState({
    clientEmail: "",
    clientPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    clientEmail: "",
    clientPassword: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setFormErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const validateEmail = (email) => {
    return String(email)
      .trim()
      .toLocaleLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { clientEmail, clientPassword } = formData;
    let errors = {};

    if (!clientEmail.trim()) {
      errors.clientEmail = "Email is required!";
    } else if (!validateEmail(clientEmail)) {
      errors.clientEmail = "Invalid Email address!";
    }
    if (!clientPassword.trim()) {
      errors.clientMessage = "Password is required!";
    }
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setSuccessMsg(
        `Hello dear, Thank you for your attempt. We are processing to validate your access. Till then stay connected and additional assistance will be sent to you by your mail at ${formData.clientEmail}`
      );
    }
  };

  return (
    <div className="w-full h-screen flex">
      <div className="bg-primeColor text-white h-full w-[40%] lgl:w-[35%] hidden lg:inline-flex flex-col px-8 space-y-3">
        <div className="font-bold text-2xl font-titleFont pt-0 mt-0">
          shopLover
        </div>

        <div className="space-y-1">
          <p className="text-xl font-bold">Stay sign in for more</p>
          <p className="text-md font-semibold text-gray-100">
            When you sign in, you are with us!
          </p>
        </div>

        <div className="flex justify-center gap-2 items-start w-[300px]">
          <div>
            <FaCircleCheck className="text-green-500 text-lg mt-1" />
          </div>
          <div className="space-y-1">
            <p className="text-lg font-bold">Get started fast with shopLover</p>
            <p className="text-md text-base text-gray-300">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
              nisi dolor recusandae consectetur!
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-2 items-start w-[300px]">
          <div>
            <FaCircleCheck className="text-green-500 text-lg mt-1" />
          </div>
          <div className="space-y-1">
            <p className="text-lg font-bold">Access all shopLover services</p>
            <p className="text-md text-base text-gray-300">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
              nisi dolor recusandae consectetur!
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-2 items-start w-[300px]">
          <div>
            <FaCircleCheck className="text-green-500 text-lg mt-1" />
          </div>
          <div className="">
            <p className="text-lg font-bold">Trusted by online Shoppers</p>
            <p className="text-md text-base text-gray-300">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
              nisi dolor recusandae consectetur!
            </p>
          </div>
        </div>

        <div className="pt-10">
          <ul className="flex items-center justify-between text-gray-300 font-semibold text-base">
            <Link to="/">
              <li className="hover:text-white hoverEffect">&copy; shopLover</li>
            </Link>
            <li className="hover:text-white hoverEffect">Terms</li>
            <li className="hover:text-white hoverEffect">Privacy</li>
            <li className="hover:text-white hoverEffect">Security</li>
          </ul>
        </div>
      </div>
      <div className="w-full lgl:w-1/2 h-full px-5">
        {successMsg ? (
          <div className="w-full lg:w-[500px] h-full flex flex-col justify-center">
            <p className="w-full px-4 py-10 text-green-500 font-medium font-titleFont">
              {successMsg}
            </p>
            <Link to="/signup">
              <button
                className="w-full h-10 bg-primeColor text-gray-200 rounded-md text-base font-titleFont font-semibold 
             tracking-wide hover:bg-black hover:text-white duration-300"
              >
                Sign Up
              </button>
            </Link>
          </div>
        ) : (
          <form
            onClick={handleSubmit}
            className="w-full lgl:w-[450px] h-screen flex items-center justify-center"
          >
            <div className="px-6 py-4 w-full h-[90%] flex flex-col justify-center scrollbar-thin scrollbar-thumb-primeColor">
              <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-3xl mdl:text-4xl mb-4">
                Sign in
              </h1>
              <div className="flex flex-col gap-3">
                {/* Email */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Work Email
                  </p>
                  <input
                    onChange={handleChange}
                    value={formData.clientEmail}
                    id="clientEmail"
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="email"
                    placeholder="john@workemail.com"
                  />
                  {formErrors.clientEmail && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {formErrors.clientEmail}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Password
                  </p>
                  <input
                    onChange={handleChange}
                    value={formData.clientPassword}
                    id="clientPassword"
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="password"
                    placeholder="Create password"
                  />
                  {formErrors.clientPassword && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {formErrors.clientPassword}
                    </p>
                  )}
                </div>

                <button className="bg-primeColor hover:bg-black text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10 rounded-md  duration-300">
                  Sign In
                </button>
                <p className="text-sm text-center font-titleFont font-medium">
                  Don&apos;t have an Account?{" "}
                  <Link to="/signup">
                    <span className="hover:text-blue-600 duration-300">
                      Sign up
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Signin;
