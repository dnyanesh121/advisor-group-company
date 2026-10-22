import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MutualHero from '../components/MutualFund/MutualHero';
import MutualFunds from '../components/MutualFund/MutualInvest';
import ReturnsCalculator from '../components/MutualFund/ReturnsCalculator';
import FAQ from '../components/Faq';
import { mutualFundFaqs, DISCLAIMER_MF } from '../js/Faqdata';
import ContactUs from '../components/Contactus';

export default function MutualFund() {
  return (
    <>
      <Navbar />

      <div className="frame">
        <MutualHero />
      </div>
      <MutualFunds />
      <ReturnsCalculator />
      <FAQ faqs={mutualFundFaqs} disclaimer={DISCLAIMER_MF} />
      <ContactUs />
      <Footer />
    </>
  );
}