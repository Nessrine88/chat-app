import { useTranslations } from "next-intl";
import HeroSection from "./_components/HeroSection";
import InfoBlock from "./_components/InfoBlock";
export default function Home() {
  const t = useTranslations("Homepage");
  const heroHeadline =(
      <>
     <h1>barrel</h1>
            <h1>your.</h1>
            <h1>happiness.</h1>
     </>
  );
  const infoBlockData = {
    headline: "the experience",
    text:  " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, voluptate velit! Debitis animi ea inventore, sapiente minus quisquam suscipit nobis eos aperiam eaque quidem magnam, obcaecati vel dignissimos totam provident!",
    button: <button>BOOK NOW</button>,
    reversed: false
  }
  return (
  <div>
<HeroSection headline = {heroHeadline}/>
<InfoBlock data={infoBlockData}/>
  </div>
  )
}
