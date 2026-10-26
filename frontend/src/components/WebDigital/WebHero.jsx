import PageHero from "../PageHero";
import heroImg from "../../assets/BannerImg/WebDigital.png"

const WebHero = () => {
 return (
  <PageHero
  image={heroImg}
  label= "Web and Digital:"
  text= "Built to be seen, made to be shared"
  buttonText= "Explore Now"
  href= "https://www.firstadvisorsinsurance.com/"
  />
 );
}
export default WebHero;