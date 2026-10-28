import Navbar from "../components/common/Navbar";
import PageHero from "../components/common/PageHero";
import EventImg from "../assets/BannerImg/EventNews.png"
import Footer from "../components/common/Footer";
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