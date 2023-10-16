import { BsFillCalendarEventFill, BsFillPeopleFill } from "react-icons/bs";
import InfoCard from "./InfoCard";

export default function InfoCards() {
  return (
    <div className="my-20 grid w-full grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
      <InfoCard title="50 Members" icon={<BsFillPeopleFill />} />
      <InfoCard title="1 Team" icon={<BsFillPeopleFill />} />
      <InfoCard title="16 Years" icon={<BsFillCalendarEventFill />} />
    </div>
  );
}
