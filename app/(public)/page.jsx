import EmailCard from "../components/home/EmailCard";
import TitleIntro from "../components/home/TitleIntro";
import YoutubeVideo from "../components/home/YoutubeVideo";
import InfoCards from "../components/home/info-cards-section/InfoCards";

export default function Home() {
  return (
    <div>
      <TitleIntro />
      <InfoCards />
      <EmailCard />
      {/* <YoutubeVideo /> */}
    </div>
  );
}
