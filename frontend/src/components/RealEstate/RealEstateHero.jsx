import PageHero from "../PageHero";
import heroImg from "../../assets/BannerImg/RealEstate.png";

const RealEstateHero = () => {
    return(
        <PageHero
        image={heroImg}
        label= "Real Estate:"
        text= "Trusted advice for your next property"
        buttonText= "Explore Now"
        href= "https://www.firstadvisorsinsurance.com/"
        />
    );
}
export default RealEstateHero;