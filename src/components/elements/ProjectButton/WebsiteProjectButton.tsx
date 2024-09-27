import Link from "next/link";
import { FaLink } from "react-icons/fa";

const WebsiteProjectButton = ({ websiteLink }: { websiteLink: string }) => {
  return (
    <Link
      href={websiteLink}
      className="flex gap-3 md:gap-5 items-center p-2 border rounded bg-gradient-to-r from-teal-400 to-teal-300 text-white"
    >
      <FaLink className="text-xl md:text-2xl" />
      <p className="text-sm md:text-md font-medium">Visit Website</p>
    </Link>
  );
};

export default WebsiteProjectButton;
