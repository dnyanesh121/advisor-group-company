import Navbar from "../components/common/Navbar";
import PageHero from "../components/common/PageHero";
import blogMediaImg from "../assets/BlogImages/blog-banner.png"
import LatestArticles from "../components/BlogsMedia/Latestarticles";
import Footer from "../components/common/Footer";

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