import Navbar from '../components/Navbar.jsx';
import InsuranceProducts from '../components/Insurance/InsuranceProducts.jsx';
import Footer from '../components/Footer.jsx';
import '../css/Insurance/InsurancePage.css';
import HeroSlider from '../components/HeroSection.jsx';
import InsuranceHero from '../components/Insurance/InsuranceHero.jsx';
import OurPartners from '../components/OurPartners.jsx';
import FAQ from '../components/Common/Faq.jsx';
import { DISCLAIMER_INSURANCE, insuranceFaqs } from '../js/Faqdata.js';
import ContactUs from '../components/Contactus.jsx';

export default function Insurance() {
  return (
    <>
      <Navbar />
      {/* <HeroSlider /> */}
      <main className="insurance-page">
       <InsuranceHero />

        <InsuranceProducts />
      </main>
      <OurPartners />
      <FAQ faqs={insuranceFaqs} disclaimer={DISCLAIMER_INSURANCE} />
      <ContactUs />
      <Footer />
    </>
  );
}