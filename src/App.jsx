import './App.css'
import AboutSection from './components/About'
import ContactUsSection from './components/Contact'
import FooterSection from './components/Footer'
import HeroSection from './components/Hero'
import Navbar from './components/Navbar'
import ServicesSection from './components/Services'
import TestimonialsSection from './components/Testimonials'

function App() {
  

  return (
    <>
    <Navbar></Navbar>
     <HeroSection></HeroSection>
     <ServicesSection></ServicesSection>
     <AboutSection></AboutSection>
     <TestimonialsSection></TestimonialsSection>
     <ContactUsSection></ContactUsSection>
     <FooterSection></FooterSection>

    </>
  )
}

export default App
