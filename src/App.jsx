import React from "react"
import { BrowserRouter } from 'react-router-dom';
import Hero from "./Components/Hero";
import Navbar from './Components/Navbar';
import About from "./Components/about";
import Footer from "./Components/Footer";
import RoomCard from "./Components/RoomCard";
import Services from "./Components/Services";
import Gallary from "./Components/Gallary";
import Contact from "./Components/Contact";
import Map from "./Components/Map";
import Stat from "./Components/stat";
// import Roomdata from "./Components/Roomdata";


function App() {
  

  return (

        
<BrowserRouter>
      <Navbar/>
      <Hero/>
      <About/>
      <RoomCard/>
      <Services/>
      <Stat/>
      <Gallary/>
      <Contact/>
      <Map/>
      <Footer/>
      {/* <Roomdata/> */}
     
</BrowserRouter>
    

     
     
   
  )
}

export default App
