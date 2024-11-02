import { motion } from "framer-motion";
import { Link, BrowserRouter as Router } from 'react-router-dom';
function Destinations(){
    return(
        <>
        <motion.div
        initial = {{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}>

<h1 className="flex text-7xl text-white text-center font-myFont justify-center mt-20 mb-10">DESTINATIONS</h1>



        <div class="bg-none py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-xl px-4 md:px-8">
    <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
      <div  class="md:pt-8 lg:flex lg:flex-col lg:justify-center">
        <p class="text-center text-2xl font-bold text-white md:text-left">#1</p>

        <h1 class="mb-4 text-3xl text-center font-bold text-white sm:text-4xl md:mb-6 md:text-left">Manali</h1>

        <p class="mb-6 text-white sm:text-lg md:mb-8 md:text-2xl">Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state.</p>
      </div>
      <div>
        <div class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
          <img src="images/manali.jpg" loading="lazy" alt="Photo by Martin Sanchez" class="h-full w-full object-cover object-center hover:scale-110 transition-all" />
        </div>
      </div>
      
    </div>
  </div>
</div>
<hr></hr>
<div class="bg-none py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-xl px-4 md:px-8">
    <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
    <div>
        <div class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
          <img src="images/ooty.jpg" loading="lazy" alt="Photo by Martin Sanchez" class="h-full w-full object-cover object-center hover:scale-110 transition-all" />
        </div>
      </div>
      <div class="md:pt-8 lg:flex lg:flex-col lg:justify-center">
        <p class="text-center text-2xl font-bold text-white md:text-left">#2</p>

        <h1 class="mb-4 text-3xl text-center font-bold text-white sm:text-4xl md:mb-6 md:text-left">Ooty</h1>

        <p class="mb-6 text-white sm:text-lg md:mb-8 md:text-2xl">Ooty is a resort town in the Western Ghats mountains, in Tamil Nadu state.</p>
      </div>
      
      
    </div>
  </div>
</div>
<hr></hr>
<div class="bg-none py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-xl px-4 md:px-8">
    <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
      <div class="md:pt-8 lg:flex lg:flex-col lg:justify-center">
        <p class="text-center text-2xl font-bold text-white md:text-left">#3</p>

        <h1 class="mb-4 text-3xl text-center font-bold text-white sm:text-4xl md:mb-6 md:text-left">Shimla</h1>

        <p class="mb-6 text-white sm:text-lg md:mb-8 md:text-2xl">Shimla is the capital of the northern Indian state of Himachal Pradesh.</p>
      </div>
      <div>
        <div class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
          <img src="images/shimla.jpg" loading="lazy" alt="Photo by Martin Sanchez" class="h-full w-full object-cover object-center hover:scale-110 transition-all" />
        </div>
      </div>
      
    </div>
  </div>
</div>
<hr ></hr>
<div class="bg-none py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-xl px-4 md:px-8">
    <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
    <div>
        <div class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
          <img src="images/goa.jpg" loading="lazy" alt="Photo by Martin Sanchez" class="h-full w-full object-cover object-center hover:scale-110 transition-all" />
        </div>
      </div>
      <div class="md:pt-8 lg:flex lg:flex-col lg:justify-center">
        <p class="text-center text-2xl font-bold text-white md:text-left">#4</p>

        <h1 class="mb-4 text-3xl text-center font-bold text-white sm:text-4xl md:mb-6 md:text-left">Goa</h1>

        <p class="mb-6 text-white sm:text-lg md:mb-8 md:text-2xl">Goa is a state in western India with coastlines stretching along the Arabian Sea.</p>
      </div>
      
      
    </div>
  </div>
</div>

<hr></hr>
</motion.div>
        </>
    );
}

export default Destinations;