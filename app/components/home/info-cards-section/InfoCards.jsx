import { BsFillCalendarEventFill, BsFillPeopleFill } from "react-icons/bs";
import InfoCard from "./InfoCard";

export default function InfoCards() {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 my-20 w-full">
      <InfoCard title="50 Members" icon={<BsFillPeopleFill />} />
      <InfoCard title="1 Team" icon={<BsFillPeopleFill />} />
      <InfoCard title="16 Years" icon={<BsFillCalendarEventFill />} />
    </div>
  );
}
