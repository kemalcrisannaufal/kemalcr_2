import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const GithubProjectButton = ({ githubLink }: { githubLink: string }) => {
  return (
    <Link
      href={githubLink}
      className="h-full flex gap-3 md:gap-5 items-center p-2 border rounded shadow-lg bg-gradient-to-r from-blue-500 to-blue-300 text-white"
    >
      <FaGithub className="text-xl md:text-2xl" />
      <p className="font-medium">GitHub</p>
    </Link>
  );
};

export default GithubProjectButton;
