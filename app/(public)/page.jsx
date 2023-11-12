import TitleIntro from "../components/home/TitleIntro";
import InfoCards from "../components/home/info-cards-section/InfoCards";
import WhoWeAreCard from "../components/home/WhoWeAreCard";
import Videos from "../components/home/Videos";
import SignInSection from "../components/home/SignInSection";

export default function Home() {
  return (
    <>
      <TitleIntro />
      <InfoCards />
      <WhoWeAreCard />
      <SignInSection />
      <Videos />
    </>
  );
}
