import Navbar from '../components/common/Navbar.jsx';
import HeroSlider from '../components/common/HeroSection.jsx';
import OurServices from '../components/OurServices.jsx';
import MissionVision from '../components/MissionVision.jsx';
import FoundersStory from '../components/FounderStory.jsx';
import BlogsMedia from '../components/BlogsMedia.jsx';
import OurPresence from '../components/OurPresence.jsx';
import Footer from '../components/Footer.jsx';

export default function Home() {
  return (
    <>
      <div className="frame">
        <Navbar />
        <HeroSlider />
      </div>

      <OurServices />
      <MissionVision />
      <FoundersStory />
      <BlogsMedia />
      <OurPresence />
      <Footer />
    </>
  );
}