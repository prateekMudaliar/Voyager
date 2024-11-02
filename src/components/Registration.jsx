import { motion } from "framer-motion";
import { Link, BrowserRouter as Router } from 'react-router-dom';

function Registration(){
    return(
        <>
        <div className="shadow-sm backdrop-blur-sm">
        <section class="mx-auto px-6 text-gray-800 md:max-w-screen-xl ">
        <motion.div
        initial = {{opacity:0}}
whileInView={{opacity:1}}
transition={{duration:0.5}}
>
        <h1 className="flex text-7xl text-white text-center font-myFont justify-center mt-20 mb-10">REGISTRATION </h1>
       
  <div class="mx-auto mt-2 mb-16 block px-6 text-center">
    
    <div class="mx-auto mt-6 mb-auto block w-full text-xl font-normal leading-9 text-white md:w-3/4 xl:w-3/4">
      <p class="text-lg ">Follow these simple steps for seamless registration experience for Voyager.</p>
    </div>
    
  </div>
        
        

  <div class="grid gap-10 pb-20 sm:grid-cols-2 lg:grid-cols-3">
    <div class="rounded-md border border-gray-200 bg-none p-8 shadow-sm backdrop-blur-lg">
      <div class="my-4 flex items-center">
       
        <h3 class="text-2xl text-white font-bold md:text-xl text-center ">1. Fill the Form</h3>
      </div>
      <p class="text-white text-xl"> Click on the register button to fill your details in online form. </p>
    </div>
    <div class="rounded-md border border-gray-200 bg-none p-8 shadow-sm backdrop-blur-lg">
      <div class="my-4 flex items-center">
       
        <h3 class="text-2xl font-bold text-white md:text-xl">2. Fees Payments</h3>
      </div>
      <p class="text-white text-xl">Pay the fees for your tour mentioned in the provided enclosure.</p>
    </div>
    <div class="rounded-md border border-gray-200 bg-none p-8 shadow-sm backdrop-blur-lg">
      <div class="my-4 flex items-center">

        <h3 class="text-2xl font-bold text-white md:text-xl">3. Upload Documents</h3>
      </div>
      <p class=" text-white text-xl">Upload the required Documents.</p>
    </div>
    <div class="rounded-md border border-gray-200 bg-none p-8 shadow-sm backdrop-blur-lg">
      <div class="my-4 flex items-center">
        
        <h3 class="text-2xl font-bold text-white md:text-xl">4. TG Approval</h3>
      </div>
      <p class="text-white text-xl">Get the application approved by your Teacher Guardian.</p>
    </div>
    <div class="rounded-md border border-gray-200 bg-none p-8 shadow-sm backdrop-blur-lg">
      <div class="my-4 flex items-center">
        
        <h3 class="text-2xl font-bold text-white md:text-xl">5. Group Allotation</h3>
      </div>
      <p class="text-white text-xl">Groups will be formed according to the availability for the particular destination.</p>
    </div>
    <div class="rounded-md border border-gray-200 bg-none p-8 shadow-sm backdrop-blur-lg">
      <div class="my-4 flex items-center">
        
        <h3 class="text-2xl font-bold text-white md:text-xl">6. Happy Touring!</h3>
      </div>
      <p class="text-white text-xl">You are All set to go! Happy Touring!</p>
    </div>
  </div>
  </motion.div>
</section>
</div>




        </>
        
    );
}

export default Registration