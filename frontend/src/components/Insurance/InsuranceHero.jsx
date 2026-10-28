import PageHero from '../common/PageHero';
import heroImg from '../../assets/BannerImg/Insurance.png';

const InsuranceHero = () => (
  <PageHero
    image={heroImg}
    label="Insurance:"
    text="General insurance, matched to your needs"
    buttonText="Explore Now"
    href="https://www.firstadvisorsinsurance.com/"
  />
);

export default InsuranceHero;