import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Destinations from './components/Destinations';
import ContactUs from './components/ContactUs';
import Registration from './components/Registration';
import { motion } from 'framer-motion';
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from "@material-tailwind/react";


function App() {
  return (
    <div className="bg-mycover  bg-cover bg-fixed bg-no-repeat">
   
  
      <ThemeProvider>
        <BrowserRouter>
          <NavBar/>
          <HeroSection/>
          <Destinations/>
          
          <Registration/>
          <ContactUs/>
        </BrowserRouter>
      </ThemeProvider>
     
    
    </div>
  );
}

export default App;