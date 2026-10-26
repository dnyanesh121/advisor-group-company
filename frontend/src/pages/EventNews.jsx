import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import EventImg from "../assets/BannerImg/EventNews.png"
import Footer from "../components/Footer";
import CultureGallery from "../components/EventNews/Culturegallery";

export default function EventNews() {
    return(
        <>
        <Navbar />
        <PageHero 
          image={EventImg}
          overlayClass="event-overlay"
        />
        <CultureGallery />
        <Footer />
        </>
    )
}