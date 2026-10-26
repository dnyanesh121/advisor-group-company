// Images ko `public/services/` folder me rakho
import insurance from '../assets/OurServices/Insurance.png';
import mutualFund from '../assets/OurServices/MutualFunds.png';
import loans from '../assets/OurServices/Loans.png';
import realEstate from '../assets/OurServices/RealEstate.png';
import webDigital from '../assets/OurServices/WebDigital.png'

const services = [
  {
    id: 1,
    title: 'Insurance',
    desc: 'General insurance, matched to your needs.',
    image: insurance,
    href: '#insurance',
  },
  {
    id: 2,
    title: 'Mutual Funds',
    desc: 'Invest and help your money grow.',
    image: mutualFund,
    href: '#mutual-funds',
  },
  {
    id: 3,
    title: 'Loans',
    desc: 'Funding for your next big step.',
    image: loans,
    href: '#loans',
  },
  {
    id: 4,
    title: 'Real Estate',
    desc: 'Trusted advice for your property.',
    image: realEstate,
    href: '#real-estate',
  },
  {
    id: 5,
    title: 'Web and Digital',
    desc: 'Built to be seen, made to be shared ',
    image: webDigital,
    href: '#web-digital',
  },
];

export default services;