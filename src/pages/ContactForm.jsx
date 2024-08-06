import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    companyName: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.email) newErrors.email = "Email is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, submit the data
      const templateParams = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        email: formData.email,
        companyName: formData.companyName,
        message: formData.message,
      };

      emailjs
        .send(
          "service_r4f2t7c",
          "template_fc0fypk",
          templateParams,
          "Ij2w3tj27AWy0pPSs"
        )
        .then((response) => {
          console.log(response);
          setFormData({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            companyName: "",
            message: "",
          });
          setIsSubmitted(true);
          //   alert("Thank you for your message!");
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-10 flex flex-col md:flex-row items-start md:items-center bg-li-gray">
      <div className="md:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-2">CONNECT</h2>
        <div className="mb-4">
          <h3 className="text-lg font-bold">Dubai Office:</h3>
          <p>c/o Happy Samples FZ LLC</p>
          <p>
            Investor Hub, HD01, in5 Tech, Dubai Knowledge Village, Dubai
            Internet City, Dubai - 54106, UAE
          </p>
          <p>
            KHDA Permit:{" "}
            <a href="#" className="text-blue-500">
              631503
            </a>
          </p>
          <p>
            Ph:{" "}
            <a href="tel:+971585967769" className="text-blue-500">
              +971 58 5967769
            </a>
          </p>
          <p>
            Landline:{" "}
            <a href="tel:+971042857073" className="text-blue-500">
              +971 (04) 285 7073
            </a>
          </p>
          <p>
            Admissions Email:{" "}
            <a href="mailto:admissions@inc.academy" className="text-blue-500">
              admissions@inc.academy
            </a>
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold">Dubai Training Center:</h3>
          <p>
            Level M, Sheraton Jumeirah Beach Resort, JBR, Al Marsa Street,
            Dubai, UAE
          </p>
        </div>
      </div>
      <div className="md:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">Contact Babeltaelim.ae</h2>
        <p className="mb-4">Say Hello! We d love to chat.</p>
        {isSubmitted ? (
          <p className="text-green-500">
            Your message has been sent successfully!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex-1">
                <label className="block mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full p-2 border ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  } rounded`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}
              </div>
              <div className="flex-1">
                <label className="block mb-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full p-2 border ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  } rounded`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div>
              <label className="block mb-1">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full p-2 border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } rounded`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
            <div>
              <label className="block mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block mb-1">Company Name</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
