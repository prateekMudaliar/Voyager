import { motion } from "framer-motion";
import { Link, BrowserRouter as Router } from 'react-router-dom';
function HeroSection(){
    return (<>
    <motion.div
    initial = {{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    >
    <h1 className="sm:flex sm: flex text-5xl text-white font-myFont justify-center mt-10 text-center">Ready to explore something new?</h1>

    <p className="flex text-2xl text-white font-myFont justify-center mt-10 text-center px-20">With a varied range of attraction, natural splendours as well as man-made wonders, the journey of the serene glories offers a mesmerizing view to eyes and an experience that will leave you in awe for days to come.</p>

    <h1 className="flex text-8xl text-white font-myFont justify-center mt-10">VOYAGER</h1>
    <h1 className="flex text-5xl text-center text-white font-myFont justify-center mt-10">15th Feb - 5th Mar</h1>
    

    <p className="flex text-2xl text-white font-myFont justify-center mt-10 text-center px-20">PACK YOUR BAG, RUNGTA STUDENTS ARE GOING FOR INDUSTRIAL TOUR. <br></br>
    Now, Rungta Educational Foundation presents ​Voyager'22​, the exciting tours to 4 different destinations</p>

    </motion.div>
    </>);
}

export default HeroSection