import { BsFillCalendarEventFill, BsFillPeopleFill } from "react-icons/bs";
import InfoCard from "./InfoCard";

export default function InfoCards() {
  return (
    <div className=" flex justify-evenly items-center my-20">
      <InfoCard title="-- Members" icon={<BsFillPeopleFill />} />
      <InfoCard title="1 Team" icon={<BsFillPeopleFill />} />
      <InfoCard title="16 Years" icon={<BsFillCalendarEventFill />} />
    </div>
  );
}
