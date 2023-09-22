import {
  BiLogoFacebookCircle,
  BiLogoInstagramAlt,
  BiLogoYoutube,
} from "react-icons/bi";
import { HiMail } from "react-icons/hi";

const socialLinks = [
  {
    id: 1,
    icon: <BiLogoFacebookCircle />,
    link: "https://www.facebook.com/crusaderbots",
  },
  {
    id: 2,
    icon: <BiLogoInstagramAlt />,
    link: "https://www.instagram.com/jesuit_crusaderbots/",
  },
  {
    id: 3,
    icon: <BiLogoYoutube />,
    link: "https://www.youtube.com/@2374_jesuit_robotics/",
  },
  {
    id: 4,
    icon: <HiMail />,
    link: "mailto:pwhite@jesuitmail.org",
  },
];

export default function Footer() {
  return (
    <footer className="text-center p-6 mt-10">
      <hr className=" border-2 border-solid border-green-700 my-5 mx-auto rounded-md w-2/3 md:w-1/2 lg:mx-90 max-w-xs" />

      <div className="flex w-2/3 justify-evenly items-center mx-auto my-10">
        {socialLinks.map((socialLink) => (
          <a
            href={socialLink.link}
            target="_blank"
            className="hover:text-green-800 duration-200 text-4xl"
            key={socialLink.id}
          >
            {socialLink.icon}
          </a>
        ))}
      </div>

      <h6 className=" p-2 text-gray-800 dark:text-slate-300 uppercase">
        Copyright &copy; 2023 Jesuit High School Robotics - All rights reserved.
      </h6>
    </footer>
  );
}
