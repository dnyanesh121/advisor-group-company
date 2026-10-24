import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import blogMediaImg from "../assets/BlogImages/blog-banner.png"
import LatestArticles from "../components/BlogsMedia/Latestarticles";
import Footer from "../components/Footer";

export default function BlogMedia() {
    return(
        <>
        <Navbar />
        <PageHero 
          image={blogMediaImg}
          overlayClass="event-overlay"
        />
        <LatestArticles />
        <Footer />
        </>
    )
}