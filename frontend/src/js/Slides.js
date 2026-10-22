// Slide images: apni banner images (bina text wali) src/assets/ me rakho
import MutualFundImg from '../assets/mutualfunds.png';
import InsuranceImg from "../assets/insurance.png";
import LoansImg from "../assets/loan.png";
import RealEstateImg from "../assets/RealEstate.png";
import WebDigitalImg from "../assets/webdigital.png";

const slides = [
  {
    id: 1,
    label: 'Insurance:',
    text: 'General insurance, matched to your needs',
    image: InsuranceImg,
    buttonText: "Explore Now",
    href: "https://www.firstadvisorsinsurance.com/"
  },
  {
    id: 2,
    label: 'Mutual Funds:',
    text: 'Invest and help your money grow.',
    image: MutualFundImg,
    buttonText: "Explore Now",
    href: "https://groww.in/mutual-funds"
  },
    {
    id: 3,
    label: 'Loans:',
    text: 'Funding for your next big step',
    image: LoansImg,
    buttonText: "Explore Now",
    href: "https://www.bankofamerica.com/"
  },
  {
    id: 4,
    label: 'Real Estate:',
    text: 'Trusted Advice for your next property',
    image: RealEstateImg,
    buttonText: "Explore Now",
    href: "https://www.investopedia.com/"
  },
  {
    id: 5,
    label: 'Web and Digital:',
    text: 'Built to be seen, made to be shared',
    image: WebDigitalImg,
    buttonText: "Explore Now",
    href: "https://webanddigitalsolutions.ca/"
  },
];

export default slides;