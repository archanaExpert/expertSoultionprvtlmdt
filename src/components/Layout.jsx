
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import TopButton from "./TopButton";
import WhatsAppButton from "./WhatsAppButton";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
    
      <Navbar />

  
      <main className="flex-grow pt-19">
        <Outlet />
      </main>

      <TopButton />
      <WhatsAppButton />

     
      <Footer/>
    </div>
  );
};
export default Layout
