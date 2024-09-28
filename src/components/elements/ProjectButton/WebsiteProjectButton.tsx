import Link from "next/link";
import { FaLink } from "react-icons/fa";

const WebsiteProjectButton = ({
  websiteLink,
  disabled,
}: {
  websiteLink: string;
  disabled: boolean;
}) => {
  return (
    <Link
      href={websiteLink}
      className={`h-full flex gap-3 md:gap-5 items-center p-2 px-3 border rounded bg-gradient-to-r from-teal-400 to-teal-300 text-white ${
        disabled && "hidden"
      }`}
    >
      <FaLink className="text-xl md:text-2xl" />
      <p className="text-sm md:text-md font-medium">Visit</p>
    </Link>
  );
};

export default WebsiteProjectButton;
