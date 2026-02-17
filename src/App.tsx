import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServiceSection from './components/ServiceSection';
import Location from './components/Location';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <ServiceSection/>
      <Location/>
      <ReviewsSection/>
      <Footer/>
      <WhatsAppButton/>
    </div>
  );
}

export default App
