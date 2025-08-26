import React from 'react'
import AboutUs from '../AboutUs'
import ContactForm from '../ContactForm'
// import FlipSlider from '../FlipSlider';
// import Img from '../../assets/mya.png'; // Correct import
// import Slider from '../Slider';
// import Services from '../Services'
// import Navbar from '../Navbar';
// import FlipCard from '../FlipCard';
import Slider from '../Slider';
// import Footer from '../Footer';
// import FlipList from '../FlipList';
import ServiceSlider from "../ServiceSlider";
// import { FiSend } from "react-icons/fi";
// const onClick= ()=> {
//   window.scrollTo(0, 0)
// }
// import FlipSlider from '../Services';
const Home = () => {
  return (
    <div>
      {/* <p className=''>hello this is home page</p> */}
      {/* <Navbar/> */}
      {/* <img src={Img}/> */}
      {/* <FlipSlider/> */}
      {/* <FlipList/> */}
      <Slider/>
      {/* <FlipCard/> */}
      <AboutUs/>
  
      <ContactForm/>
      {/* <Services/> */}
      <ServiceSlider/>
    {/* <button
  onClick={onClick}
  className="p-3 bg-blue-600 text-white rounded-full m-5 hover:bg-blue-700 transition duration-300 flex items-center justify-center animate-bounce"
>
  <FiSend
   className="text-xl" />
</button> */}

    </div>
  )
}

export default Home
