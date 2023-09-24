import Image from "next/image";
import ListLink from "./ListLink";

const linksList = [
  {
    id: 1,
    name: "Amazon",
    link: "https://www.amazon.com/hz/wishlist/intro",
    iconPath: "/logos/wish-list/amazon.png",
  },
  {
    id: 2,
    name: "AndyMark",
    link: "https://www.andymark.com/wish_lists/eBmGLdaTkz3sN1KRUAjm5GD3",
    iconPath: "/logos/wish-list/andymark.png",
  },
  {
    id: 3,
    name: "Home Depot",
    link: "https://www.homedepot.com/list/view/details/shared/45f1e1d0-4f72-11ee-b204-3dbb14292a42",
    iconPath: "/logos/wish-list/home-depot.png",
  },
];

export default function WishList() {
  return (
    <div className="flex justify-evenly items-center">
      <div className="max-w-xl">
        <h2>Wish List</h2>
        <p>
          Our team is fortunate to have dedicated and supportive parents. We are
          often asked, &quot;what do you need&quot;?. To enhance our
          performance, experience, and learning opportunities , we have compiled
          a wish list of items . These items do not fit into our budget but
          would benefit our team and contribute to the growth and development of
          each member.
        </p>
        <div className="flex justify-evenly items-center my-10">
          {linksList.map((link) => (
            <ListLink
              name={link.name}
              link={link.link}
              iconPath={link.iconPath}
              key={link.id}
            />
          ))}
        </div>
      </div>
      <Image
        src="/svg/wish-list/wishes-animated.svg"
        width={400}
        height={400}
        alt="Wish"
      />
    </div>
  );
}
