import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../components/pageProps/Breadcrumbs";

const Contact = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");

  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);

  const [formData, setFormData] = useState({
    clientName: "",
    clientEmail: "",
    clientMessage: "",
  });

  const [formErrors, setFormErrors] = useState({
    clientName: "",
    clientEmail: "",
    clientMessage: "",
  });

  const [successMsg, setSuccessMsg] = useState("");

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
    const { clientName, clientEmail, clientMessage } = formData;
    let errors = {};
    if (!clientName.trim()) {
      errors.clientName = "Name is required!";
    }
    if (!clientEmail.trim()) {
      errors.clientEmail = "Email is required!";
    } else if (!validateEmail(clientEmail)) {
      errors.clientEmail = "Invalid Email address!";
    }
    if (!clientMessage.trim()) {
      errors.clientMessage = "Message is required!";
    }
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setSuccessMsg(
        `Thank you dear ${clientName}, your message has been received successfully. Further details will be sent to your email at ${clientEmail}`
      );
    }
  };

  return (
    <div className="px-4">
      <Breadcrumbs title="Contact Us" prevLocation={prevLocation} />
      {successMsg ? (
        <p className="pb-20 w-96 font-medium text-green-500">{successMsg}</p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto pb-20">
          <h1 className="font-titleFont font-semibold text-3xl pb-5">
            Fill up a Form
          </h1>
          <div className="space-y-5">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <input
                className="w-full py-1 border-b-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
                type="text"
                id="clientName"
                onChange={handleChange}
                value={formData.clientName}
                placeholder="Enter your name here"
              />
              {formErrors.clientName && (
                <p className="text-red-500 text-sm">{formErrors.clientName}</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <input
                className="w-full py-1 border-b-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
                type="text"
                id="clientEmail"
                onChange={handleChange}
                value={formData.clientEmail}
                placeholder="Enter your email here"
              />
              {formErrors.clientEmail && (
                <p className="text-red-500 text-sm">{formErrors.clientEmail}</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="message">Message</label>
              <textarea
                type="text"
                id="clientMessage"
                onChange={handleChange}
                value={formData.clientMessage}
                cols={30}
                rows={3}
                className="w-full py-1 border-b-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor resize-none"
                placeholder="Enter your message here"
              />
              {formErrors.clientMessage && (
                <p className="text-red-500 text-sm">
                  {formErrors.clientMessage}
                </p>
              )}
            </div>
          </div>
          <button className="w-44 bg-primeColor text-gray-200 h-10 font-titleFont text-base tracking-wide font-semibold hover:bg-black hover:text-white duration-200 mt-5">
            Post
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
