import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const testimonials = [
  {
    quote: "Expert Solutions made our logistics seamless and efficient.",
    author: "Amit Sharma",
    role: "CEO, Logistics Firm",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote: "The team was professional and delivered beyond expectations.",
    author: "Priya Verma",
    role: "Director, E-Commerce Company",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    quote: "Great experience! Their service is reliable and top-notch.",
    author: "Rahul Singh",
    role: "Manager, Manufacturing Unit",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
];


const locations = [
  {
    city: "Bhubaneswar, Odisha",
    address: "78, Gautam Nagar, Bhubaneswar, Odisha 751014",
    phone: "+91 7509617777",
    image: "https://www.google.com/maps/vt/data=lFnEC_D6zBw97cTvUam7BfCSoNt7KX7X5Y1PldkjXaqPVaEAanlplP52sTYhWsTp9SDTGc5Ceq4IdP75RPuGWYKMV975MTsTTBTmwrT8jP6d7FiMudReRT_h-IyWdFYbYJLmcUDACfy8w8AsJlABWVl6ZSrn8Zb908RduoS7aTAr4Da30xzNQucPJiEyv8xSHuBqY69vM7P1ntaOiQOBL-0tWgtp3Kio5ITZHhdq9hBsi8JxBPwvew",
  },
  {
    city: "Raipur, Chhattisgarh",
    address: "EXPERT SOLUTIONS, C-25, Ramkund Vihar, Samta Colony, Raipur, Chhattisgarh 492001",
    phone: "+91 7509627777",
    image: "https://www.google.com/maps/vt/data=gtf0BD9hlBCjJY50yXoCQ5zfhc2avw2RuQ3MUkhR7gbVM_R7Nh7OkAnQvbmJ9LOx5AR4Ss5oIaBoiB4vUhAQULK5o-GQDtMIbLmMfm2mJa-oE2yr8Rs11eqkyaXPx3YxKUYL6m-cab_InyQcgMsZvnd5ru_L81F29glJ1v2SNJU3",
  },
];

const ContactUs = () => {
  const [recaptchaVerified, setRecaptchaVerified] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleRecaptcha = (value) => {
    setRecaptchaVerified(!!value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recaptchaVerified) {
      alert("Please verify that you are not a robot.");
      return;
    }
    if (!termsAccepted) {
      alert("Please accept the Terms & Conditions.");
      return;
    }
    alert("Form submitted successfully!");
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="text-white">
     
 <div id="contact"
  className="relative flex justify-center items-center bg-no-repeat text-center bg-cover bg-center  sm:h-[550px] md:h-[600px] lg:h-[650px] w-full"
  style={{
    backgroundImage:
      "url('https://static.vecteezy.com/system/resources/previews/051/166/491/non_2x/communication-concept-with-email-message-box-and-contacts-icons-e-mail-marketing-customer-support-counseling-and-support-hotline-connection-with-modern-network-technology-contact-us-free-photo.jpg')",
  }}
>
 
  <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 to-orange-400/60 backdrop-blur-[2px]"></div>

 
  <div className="relative w-full max-w-6xl sm:px-6 md:px-8 text-center">
   
    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-2xl leading-tight">
      See Your <span className="text-orange-400">Digital Transformative</span> Growth With Us
    </h1>

   
    <p className="text-base sm:text-lg md:text-xl text-gray-200 mt-4 drop-shadow-lg max-w-4xl mx-auto">
      Get all your questions answered by our business development team and unlock new opportunities for your business.
    </p>

   
    <div className="mt-8">
      <a
        href="#contact"
        className="inline-block bg-gradient-to-r from-blue-950 to-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-yellow-400/40 hover:scale-105 transition duration-300 ease-in-out"
      >
        Contact Us
      </a>
    </div>
  </div>
</div>



      
      <div id="contact"
        className="py-12 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://cdn.eso.org/images/wallpaper5/eso1035b.jpg')",
        }}
      >
        <div className="bg-transparent bg-opacity-95 shadow-xl rounded-lg p-8 border border-gray-700 backdrop-blur-lg max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" placeholder="Your Name" className="p-4 border rounded-lg w-full bg-sky-950 text-white" required />
            <input type="text" placeholder="Company Name" className="p-4 border rounded-lg w-full bg-sky-950 text-white" required />
            <input type="email" placeholder="Business Email" className="p-4 border rounded-lg w-full bg-sky-950 text-white" required />
            <textarea placeholder="Your Message" className="p-4 border rounded-lg w-full bg-sky-950 text-white" rows="4" required></textarea>

           
            <div className="flex justify-center my-4">
              <ReCAPTCHA sitekey="your-site-key" onChange={handleRecaptcha} />
            </div>

            <div className="flex items-center space-x-2">
              <input type="checkbox" id="terms" className="w-5 h-5" checked={termsAccepted} onChange={() => setTermsAccepted(!termsAccepted)} />
              <label htmlFor="terms">I agree to the Terms & Conditions</label>
            </div>

            <button type="submit" className="bg-red-600 px-6 py-3 rounded-lg text-lg">
              Submit
            </button>
          </form>
        </div>
      </div>

      
      <div
        className="py-12 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://cdn.pixabay.com/photo/2017/08/17/16/48/fuhrmann-2651971_1280.jpg')",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">Our Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {locations.map((location, index) => (
              <div key={index} className="bg-blue-900 p-6 rounded-lg shadow-lg text-white">
                <img src={location.image} alt={location.city} className="w-full h-40 rounded-md object-cover mb-3" />
                <h3 className="text-xl font-semibold">{location.city}</h3>
                <p>{location.address}</p>
                <p>{location.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

   
      <div
        className="py-12 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://cdn.pixabay.com/photo/2017/05/01/22/35/starfield-2276843_1280.jpg')",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">What Our Clients Say</h3>
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-slate-900 rounded-lg shadow-lg">
                <img src={testimonial.image} alt={testimonial.author} className="w-20 h-20 mx-auto rounded-full border-4 border-blue-500" />
                <p className="text-lg">"{testimonial.quote}"</p>
                <p>{testimonial.author} - {testimonial.role}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
