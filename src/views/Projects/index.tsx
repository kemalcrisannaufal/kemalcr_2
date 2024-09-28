import React from "react";
import { Timeline } from "@/components/ui/time-line";
import ProjectButton from "@/components/elements/ProjectButton";

export function TimelineDemo() {
  const data = [
    {
      title: "Portfolio Website",
      content: (
        <div>
          <ProjectButton
            githubLink={"https://github.com/kemalcrisannaufal/kemalcr/"}
            websiteLink={"https://kemalcrisannaufal.vercel.app/"}
          />
          <div>
            <img src="/images/portfolio-image-1.png" alt="" />
          </div>
        </div>
      ),
    },
    {
      title: "Blog Apps",
      content: (
        <div>
          <ProjectButton
            githubLink={"https://github.com/kemalcrisannaufal/blog-apps"}
            websiteLink={"https://blog-apps-kcr.vercel.app/"}
          />
          <div>
            <img src="/images/blog-2.png" alt="" />
          </div>
        </div>
      ),
    },
    {
      title: "Fakestore",
      content: (
        <div>
          <ProjectButton
            githubLink={"https://github.com/kemalcrisannaufal/fakestore"}
            websiteLink={"https://fakestore-two-psi.vercel.app/"}
          />
          <div>
            <img src="/images/fake-store-3.png" alt="" />
          </div>
        </div>
      ),
    },
    {
      title: "Maenbal",
      content: (
        <div>
          <ProjectButton
            githubLink={"https://github.com/kemalcrisannaufal/Maenball-FE-BE"}
            websiteLink={""}
          />
          <div>
            <img src="/images/maenbal-1.png" alt="" />
          </div>
        </div>
      ),
    },
    {
      title: "Pneumonia & TBC Classification",
      content: (
        <div>
          <ProjectButton
            githubLink={
              "https://github.com/kemalcrisannaufal/Klasifikasi-Pneumonia-dan-TBC"
            }
            websiteLink={""}
          />
          <div>
            <img src="/images/paru1.png" alt="" />
            <img src="/images/paru2.png" alt="" />
            <img src="/images/paru3.png" alt="" />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

const ProjectsView = () => {
  return (
    <>
      <TimelineDemo></TimelineDemo>
    </>
  );
};

export default ProjectsView;
