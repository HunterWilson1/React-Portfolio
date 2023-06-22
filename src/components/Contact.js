import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-start items-center p-5 text-center"
    >
      <h1 className="py-4 text-3xl font-bold">Contact Me</h1>
      <div className="p-8 text-left max-w-md w-full">
        <form action="https://getform.io/f/53742d01-9a98-491d-8324-894631456372" method="POST">
          <div className="gap-4">
            <div className="flex flex-col my-3">
              <label className="text-sm py-2 font-extralight">Name</label>
              <input
                type="text"
                name="name"
                className="border-2 rounded-lg p-3 bg-gray-900 text-white w-full"
              />
            </div>
            <div className="flex flex-col my-3">
              <label className="text-sm py-2 font-extralight">Email</label>
              <input
                type="text"
                name="email"
                className="border-2 rounded-lg p-3 bg-gray-900 text-white w-full"
              />
            </div>
            <div className="flex flex-col my-3">
              <label className="text-sm py-2 font-extralight">Message</label>
              <textarea
                type="text"
                name="message"
                rows="7"
                className="border-2 rounded-lg p-3 bg-gray-900 text-white w-full"
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button className="my-8 bg-rose-600 px-6 py-3 rounded-md cursor-pointer hover:scale-100">Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
