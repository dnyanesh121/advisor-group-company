import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import ContactImg from "../assets/Contact-us.png";
import GetInTouch from "../components/ContactUs/Getintouch";
import Offices from "../components/ContactUs/Offices";
import RegulatoryInfo from "../components/ContactUs/RegulatoryInfo";
import Footer from "../components/Footer";

export default function ContactUs() {
    return(
        <div>
        <Navbar />
        <PageHero  
            image={ContactImg}
            overlayClass="event-overlay"
        />
        <GetInTouch />
        <Offices />
        <RegulatoryInfo />
        <Footer />
        </div>
    )
}