import Navbar from "../components/common/Navbar";
import PageHero from "../components/common/PageHero";
import ContactImg from "../assets/BannerImg/Contact-us.png";
import GetInTouch from "../components/ContactUs/Getintouch";
import Offices from "../components/ContactUs/Offices";
import RegulatoryInfo from "../components/ContactUs/RegulatoryInfo";
import Footer from "../components/common/Footer";

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