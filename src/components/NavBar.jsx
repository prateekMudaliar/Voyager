
import { Link, BrowserRouter as Router } from 'react-router-dom';
function NavBar(){
    return (
      
        <>
        {/* <h1 className="text-3xl font-black">This is Navbar</h1> */}
        
       <header class=" mb-2">
  <div class="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
    <a href="#" class="flex items-center whitespace-nowrap text-2xl font-black">
      <span class="mr-2 text-4xl text-blue-600">
        <img src="images/r1logo.png"></img>
      </span>
      
    </a>
    <input type="checkbox" class="peer hidden " id="navbar-open" />
    <label class="absolute top-5 right-7 cursor-pointer md:hidden" for="navbar-open">
      <span class="sr-only ">Toggle Navigation</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </label>
    <nav aria-label="Header Navigation" class=" p-2 rounded-sm peer-checked:mt-1 peer-checked:max-h-56 peer-checked:backdrop-blur-sm peer-checked:mb-2 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
      <ul class="flex flex-col text-black md:text-white items-center space-y-4 md:ml-auto md:flex-row md:space-y-0 ">
      
        <li class="text-white  font-medium md:text-white  text-2xl md:mr-12 hover:scale-110 hover:transition-all hover:underline hover:decoration-1"><a href="https://www.rungta.ac.in/voyager/rt/registration.php" target='blank'>Register</a></li>
     
        <li class="text-white  font-medium md:text-white text-2xl md:mr-12 hover:scale-110 hover:transition-all hover:underline hover:decoration-1"><a href="https://www.rungta.ac.in/voyager/rt/login.php" target='blank'>Login</a></li>
       
        
      </ul>
    </nav>
  </div>
</header>



        </>
    );
}
export default NavBar