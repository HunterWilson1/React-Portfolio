import React, { useState } from "react";

const Contact = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulating an error condition
    const shouldThrowError = true;

    if (shouldThrowError) {
      setErrorMessage("Oops! Something went wrong. Please try again later.");
      return;
    }

    setTimeout(() => {
      e.target.reset();
    }, 3000);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="max-w-screen-lg mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-white">Contact</h2>
        <p className="text-xl text-gray-300 mb-8">Submit the form below to get in touch with me</p>
        <form
          onSubmit={handleSubmit}
          name="contact"
          method="POST"
          action=""
          className="w-full md:w-1/2"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="p-3 bg-gray-800 border-2 rounded-md text-white w-full mb-4 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="p-3 bg-gray-800 border-2 rounded-md text-white w-full mb-4 focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="10"
            required
            className="p-3 bg-gray-800 border-2 rounded-md text-white w-full mb-4 focus:outline-none"
          ></textarea>

          {errorMessage && <p className="text-red-500">{errorMessage}</p>}

          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-b from-cyan-500 to-blue-500 text-white rounded-md hover:scale-105 duration-300 focus:outline-none"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

