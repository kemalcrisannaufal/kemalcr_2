import GithubProjectButton from "./GithubProjectButton";
import WebsiteProjectButton from "./WebsiteProjectButton";

const ProjectButton = ({
  githubLink,
  websiteLink,
}: {
  githubLink: string;
  websiteLink: string;
}) => {
  return (
    <div className="w-full flex justify-end items-center gap-5 mb-5">
      <GithubProjectButton githubLink={githubLink} />
      <WebsiteProjectButton websiteLink={websiteLink} />
    </div>
  );
};

export default ProjectButton;
