import React, { useRef } from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ot65twe', 'template_di0lhh1', form.current, '4ZV97ZXylsL7OZjwV')
          .then((result) => {
            if(result.text === 'OK'){
                
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Email sent successfully',
                  showConfirmButton: false,
                  timer: 1500
                }) 
            }
              
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className="md:w-[80%] md:mx-auto">
      <div className="hero  bg-base-800">
        <div className="hero-content flex-col md:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold mb-6 uppercase">Contact with me</h1>

            <div className="flex gap-4">
              <h2 className="w-16 h-16 text-2xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-[#fd9844] cursor-pointer duration-300 bg-black bg-opacity-75 text-gray-100 ">
                <a href="https://www.facebook.com/kamruld.ridoy/">
                  <FaFacebookF></FaFacebookF>{" "}
                </a>
              </h2>
              <h2 className="w-16 h-16 text-2xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-[#fd9844] cursor-pointer duration-300 bg-black bg-opacity-75 text-gray-100 ">
                <a href="https://www.linkedin.com/in/kamrul-ridoy/">
                  <FaLinkedinIn></FaLinkedinIn>
                </a>
              </h2>
              <h2 className="w-16 h-16 text-2xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-[#fd9844] cursor-pointer duration-300 bg-black bg-opacity-75 text-gray-100 ">
                <a href="https://twitter.com/KamrulRidoy1">
                  <FaTwitter></FaTwitter>
                </a>
              </h2>
            </div>
          </div>
          <div className="card w-full md:w-[800px] bg-base-400 shadow-shadowOne ">
            <div className="card-body">
              <form  ref={form} onSubmit={sendEmail}>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="You Name"
                  name="from_name"
                  className="input input-bordered text-black"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="from_email"
                  className="input input-bordered text-black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Your message</span>
                </label>
                <textarea
                  className="textarea textarea-warning text-black"
                  placeholder="text"
                  name="message"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Send</button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
