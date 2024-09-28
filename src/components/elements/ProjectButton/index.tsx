import GithubProjectButton from "./GithubProjectButton";
import WebsiteProjectButton from "./WebsiteProjectButton";

const ProjectButton = ({
  githubLink,
  websiteLink,
  disabled,
}: {
  githubLink: string;
  websiteLink: string;
  disabled: boolean;
}) => {
  return (
    <div className="w-full h-full flex justify-end items-center gap-5 mb-5">
      <GithubProjectButton githubLink={githubLink} />
      <WebsiteProjectButton websiteLink={websiteLink} disabled={disabled} />
    </div>
  );
};

export default ProjectButton;
