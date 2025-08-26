import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




// Pages
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs';
import ClientPage from './components/ClientPage';
import RetailManagement from './components/RetailManagement';
import ContactUs from './components/Contact_Us';
import SignInForm from './components/SignInForm';
import SocialMedia from './components/SocialMedia';
import TransportationServices from './components/TransportationServices';
import ManufacturingIT from './components/ManufacturingIT';
import Ecommercesolutions from './components/Ecommercesolutions';
import TripManagementApp from './components/TripManagementApp';
import WebAppDevelopmentCompany from './components/WebAppDevelopmentCompany';
import FleetManagementPage from './components/FleetManagementPage';
import FleetManagementsSystem from './components/FleetManagementsSystem';
import LoadCargoManagement from './components/LoadCargoManagement';
import ExpenseBillingManagement from './components/ExpenseBillingManagement';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import GroupManagement from './components/GroupManagement';
import Technology from './components/Technology';
import FleetManagement from './components/FleetManagement';
import Driver from './components/Driver';
import CargoManagement from './components/CargoManagement';
import Management from './components/Management';
import Analytics from './components/Analytics';
import SmartQRSeals from './components/SmartQRSeals';
import Group from './components/Group';
import ServicesPage from './components/ServicesPage';
import SolutionsPage from './components/SolutionsPage';
import TermsAndConditions from './components/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import PrototypeServices from './components/PrototypeServices';
import DigitalMarketingPage from './components/DigitalMarketingPage';
import Company from './components/company';
import Layout from './components/Layout';


function App() {
  return (
      <Routes>
        {/* Common Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/client" element={<ClientPage />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/retail" element={<RetailManagement />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/transportation" element={<TransportationServices />} />
          <Route path="/manufacture" element={<ManufacturingIT />} />
          <Route path="/e-commerce-solutions" element={<Ecommercesolutions />} />
          <Route path="/mobile-app-solution" element={<TripManagementApp />} />
          <Route path="/web-and-cms-solution" element={<WebAppDevelopmentCompany />} />
          <Route path="/fleet-management-solution" element={<FleetManagementPage />} />
          <Route path="/driver-&-vehicle-management-solution" element={<FleetManagementsSystem />} />
          <Route path="/load-and-cargo-management-solution" element={<LoadCargoManagement />} />
          <Route path="/expense-&-billing-management-solution" element={<ExpenseBillingManagement />} />
          <Route path="/analytics-&-reporting-solution" element={<AnalyticsDashboard />} />
          <Route path="/group-management-solution" element={<GroupManagement />} />
          <Route path="/fleet-management" element={<FleetManagement />} />
          <Route path="/driver-&-vehicle-management" element={<Driver />} />
          <Route path="/load-and-cargo-management" element={<CargoManagement />} />
          <Route path="/expense-&-billing-management" element={<Management />} />
          <Route path="/analytics-&-reporting" element={<Analytics />} />
          <Route path="/group-management" element={<Group />} />
          <Route path="/smart-qr-seal-&-tracking" element={<SmartQRSeals />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/legal/terms-and-condition" element={<TermsAndConditions />} />
          <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/services/e-commerce" element={<Ecommercesolutions />} />
          <Route path="/services/mobile-app" element={<TripManagementApp />} />
          <Route path="/services/ui/ux" element={<PrototypeServices />} />
           <Route path="/solutions/group-management" element={<Group />} />
          <Route path="/solutions/driver-vehicle" element={<Driver />} />
          <Route path="/solutions/load-cargo" element={<LoadCargoManagement />} />
          <Route path="/solutions/expense-billing" element={<Management />} />
          <Route path="/solutions/analytics-report" element={<Analytics />} />
          <Route path="/services/fleet-management" element={<FleetManagementPage />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
        </Route>
      </Routes>
    
  );
}

export default App;
