import PageHero from '../PageHero';
import heroImg from '../../assets/BannerImg/MutualFunds.png';

const MutualHero = () => (
 <PageHero
    image={heroImg}
    label="Mutual Funds:"
    text="Invest and help your money grow."
    buttonText="Explore Now"
    href="https://groww.in/mutual-funds" // 👈 yahan asli link daalo
  />
);

export default MutualHero;