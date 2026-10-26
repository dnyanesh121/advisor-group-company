import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import CareerImg from "../assets/BannerImg/Career.png"
import CareerHighlights from "../components/Career/Careerhighlight";
import OpenPositions from "../components/Career/Openposition";
import Footer from "../components/Footer";

export default function Career() {
    return(
        <>
        <Navbar />
        <PageHero 
            image={CareerImg}
            overlayClass="event-overlay"
        />
        <CareerHighlights />
        <OpenPositions />
        <Footer />
        </>
    )
}