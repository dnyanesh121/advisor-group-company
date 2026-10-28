import Navbar from "../components/common/Navbar";
import RealEstateHero from "../components/RealEstate/RealEstateHero"
import TrustedPartner from "../components/RealEstate/TrustedPartner";
import estateImg from "../assets/RealEstate/TrustedPartner.png";
import Offerings from "../components/RealEstate/Offering";
import FAQ from "../components/common/Faq";
import { DISCLAIMER_RealEstate, realestateFaqs } from "../js/Faqdata";
import ContactUs from "../components/Contactus";
import Footer from "../components/common/Footer";

export default function RealEstate() {
    return (
        <>
        <Navbar />
        <div className="frame">
        <RealEstateHero />
        <TrustedPartner 
        title= "Your Trusted Partner in"
        highlight="Real Estate Investment"
        text="First Advisors helps individuals and investors identify the right real estate opportunities through market insights, strategic property guidance, and investment-focused advisory. From property evaluation and location analysis to investment planning and transaction support, we simplify complex real estate decisions with research-driven insights and a client-first approach."
        image={estateImg}
        buttonText="Talk to an Expert"
        href="/contact"
        />
        <Offerings />
        <FAQ faqs={realestateFaqs} disclaimer={DISCLAIMER_RealEstate} />
        <ContactUs />
        <Footer />
        </div>
        </>
    )
}