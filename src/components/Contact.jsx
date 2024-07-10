import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import contact from "../../contact.json";
import Lottie from "lottie-react";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/anleewla", userInfo);
      toast.success("Your message has been sent");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div
        name="Contact"
        className="bg-[#E9D5A1] max-w-screen-2xl container mx-auto md:px-20 p-8"
      >
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Contact Me
        </h1>
        {/* <span className="text-center block mb-8 font-semibold text-gray-800">
        Please fill out the form below to contact me
      </span> */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-gray-100 w-full md:w-3/6 px-6 md:px-8 py-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-95"
          >
            <h1 className="text-2xl font-semibold mb-4 text-gray-800">
              Send Your Message
            </h1>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 font-medium">
                Full Name
              </label>
              <input
                {...register("name", { required: true })}
                className="shadow-lg rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
              />
              {errors.name && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 font-medium">
                Email Address
              </label>
              <input
                {...register("email", { required: true })}
                className="shadow-lg rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500"
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                {...register("message", { required: true })}
                className="shadow-lg rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500"
                id="message"
                name="message"
                placeholder="Enter your query"
              />
              {errors.message && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-gradient-to-r from-yellow-500 to-red-500 text-white rounded-xl px-4 py-2 font-medium shadow-lg hover:bg-gradient-to-l hover:from-red-500 hover:to-yellow-500 transition duration-300"
              >
                Send
              </button>
            </div>
          </form>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <Lottie
              animationData={contact}
              className="w-full md:w-3/4 lg:w-5/6"
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Contact;
