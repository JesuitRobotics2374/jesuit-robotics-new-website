import TitleIntro from "../components/home/TitleIntro";
import YoutubeVideo from "../components/home/YoutubeVideo";
import InfoCards from "../components/home/info-cards-section/InfoCards";
import WhoWeAreCard from "../components/home/WhoWeAreCard";
import Videos from "../components/home/Videos";

export default function Home() {
  return (
    <div>
      <TitleIntro />
      <WhoWeAreCard />
      <InfoCards />
      <Videos />
    </div>
  );
}
