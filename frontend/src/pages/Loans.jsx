import Footer from "../components/Footer";
import EMICalculator from "../components/Loans/EmiCalculator";
import LoanHero from "../components/Loans/LoanHero";
import LoanProducts from "../components/Loans/LoanProducts";
import Navbar from "../components/common/Navbar";
import { DISCLAIMER_LOANS, loansFaqs } from "../js/Faqdata";
import FAQ from '../components/common/Faq';
import ContactUs from "../components/Contactus";

export default function Loans() {
    return(
        <>
        <Navbar />
        <div className="frame">
            <LoanHero />
            <LoanProducts />
            <EMICalculator />
            <FAQ faqs={loansFaqs} disclaimer={DISCLAIMER_LOANS} />
            <ContactUs />
            <Footer />
        </div>
        </>
    )
}