import PageHero from '../PageHero';
import heroImg from '../../assets/BannerImg/Loan.png';

const LoanHero = () => (
 <PageHero
    image={heroImg}
    label= "Loans:"
    text= "Funding for your next big step"
    buttonText="Explore Now"
    href="https://www.bankofamerica.com/" // 👈 yahan original link daalo
  />
);

export default LoanHero;