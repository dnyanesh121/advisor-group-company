import ContactUs from "../components/Contactus";
import FAQ from "../components/Faq";
import Navbar from "../components/Navbar";
import DigitalSolutions from "../components/WebDigital/DigitalSolutions";
import WebHero from "../components/WebDigital/WebHero";
import Footer from '../components/Footer';
import { DISCLAIMER_WebDigital, webDigitalFaqs } from "../js/Faqdata";

export default function WebDigital() {
    return(
        <>
        <Navbar />
        <div>
            <WebHero />
            <DigitalSolutions />
            <FAQ faqs={webDigitalFaqs} disclaimer={DISCLAIMER_WebDigital} />
            <ContactUs />
            <Footer />
        </div>
        </>
    )
}