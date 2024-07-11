import ContentSection from "../ContentSection/ContentSection"
import { FooterLinks } from "../Footer/FooterLinks"
import { HeaderMegaMenu } from "../Header/HeaderMegaMenu"
import HeroSection from "../HeroSection/HeroSection"
import LiveClasses from "../LiveClass/LiveClasses"

const Home = () => {
  return (
    <div id="header">
      <HeaderMegaMenu/>
      <HeroSection/>
      <LiveClasses/>
      <ContentSection/>
      <FooterLinks/>
    </div>
  )
}

export default Home
