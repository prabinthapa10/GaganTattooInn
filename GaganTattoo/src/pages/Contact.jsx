import React, { useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import InputFields from "../Components/InputFields";
import Button from "../Components/Button";
import Footer from "../Components/Footer";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_bclk3c5", "template_uq865cm", form.current, {
        publicKey: "y1xgGLOASQRW256ko",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    setFormData({
      first_name: "",
      last_name: "",
      user_email: "",
      subject: "",
      message: "",
    });
  };
  return (
    <div>
      <div className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-[7px] z-999">
        <Navbar />
      </div>
      <div className="h-screen bg-[url('/img/contactbg.jpg')] bg-cover bg-center flex justify-center items-center">
        <div className=" w-[75%]  bg-transparent backdrop-blur-[7px] h-[550px] flex ">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-[50%] bg-[#2920201a] p-5 rounded-lg"
          >
            <InputFields
              name="First Name"
              type="text"
              fieldName="first_name"
              value={formData.first_name}
              onChange={handleChange}
            />
            <InputFields
              name="Last Name"
              type="text"
              fieldName="last_name"
              value={formData.last_name}
              onChange={handleChange}
            />
            <InputFields
              name="Email"
              type="email"
              fieldName="user_email"
              value={formData.user_email}
              onChange={handleChange}
            />
            <InputFields
              name="Subject"
              type="text"
              fieldName="subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <InputFields
              name="Message"
              type="textarea"
              fieldName="message"
              value={formData.message}
              onChange={handleChange}
            />
            <Button className="w-full mt-4" title="Submit" type="submit" />
          </form>
          <div className="bg-[#2520202c] w-[100%]">
            <div className="flex justify-center items-center h-[80px]">
              <h1 className="text-2xl font-bold">Contact US</h1>
            </div>
            <div className="mt-10 flex items-center space-x-7 mx-12">
              <div className=" flex flex-col space-y-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
                  />
                </svg>
              </div>
              <div className="flex flex-col space-y-5">
                {/* address */}
                <p>
                  Address <p>Lakeside Pokhara</p>
                </p>
                {/* phone */}
                <p>
                  Phone:
                  <p>61 461165</p>
                </p>
                {/* email */}
                <p>
                  Email:
                  <p>gagantattooin@yahoo.com</p>
                </p>
                {/* website */}
                <p>
                  Website: <p>https://www.gagantattooinn.com/</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
