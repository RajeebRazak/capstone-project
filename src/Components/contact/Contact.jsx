import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <section className="bg-light py-3 py-md-5">
        <div className="container">
          <div className="flex justify-center">
            <div className="max-w-2xl w-full">
              <h3 className="text-secondary text-center text-2xl mb-2">
                Get in Touch
              </h3>
              <hr className="w-1/2 mx-auto mb-5 border-dark-subtle" />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="flex justify-center">
              <img
                className="rounded"
                loading="lazy"
                src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg"
                alt="Get in Touch"
              />
            </div>
            <div>
              <div className="max-w-md mx-auto bg-white border rounded shadow-sm overflow-hidden">
                <form onSubmit={handleSubmit} className="p-4 lg:p-5">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label htmlFor="fullname" className="form-label">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-input"
                        id="fullname"
                        name="fullname"
                        value={formData.fullname}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="form-label">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-input"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="form-label">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="form-input"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="form-label">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-input"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="form-label">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        className="form-textarea"
                        id="message"
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>
                    <div className="flex justify-center">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
