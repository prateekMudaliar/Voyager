import { motion } from "framer-motion";
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { MdMailOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";


function ContactUs(){
    return(
        <>
         <footer className="bg-none text-white py-6 shadow-sm backdrop-blur-sm">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h2 className="text-3xl text-white font-bold mb-4">Contact Us</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex items-center mb-2 md:mb-0 md:mr-4">
          <MdMailOutline className="text-3xl mx-3"/>
            <span>dummyemail@example.com</span>
          </div>
          
          <div className="flex items-center">
          <IoCallOutline className="text-3xl mx-3" />
            <span>(123) 456-7890</span>
          </div>
        </div>
      </div>
    </footer>

        </>
    )
}

export default ContactUs;