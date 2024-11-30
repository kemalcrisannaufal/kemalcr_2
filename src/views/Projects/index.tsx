import React from "react";
import { Timeline } from "@/components/ui/time-line";
import ProjectButton from "@/components/elements/ProjectButton";
import {
  SiJavascript,
  SiReact,
  SiFramer,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiFirebase,
  SiMysql,
  SiPython,
  SiApifox,
  SiLaravel,
  SiBootstrap,
  SiJupyter,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import IconHoverDetail from "@/components/elements/IconHoverDetail";
import { motion } from "framer-motion";

export function ProjectsList() {
  const data = [
    {
      title: "Pixar's Dashboard",
      content: (
        <div>
          <ProjectButton
            githubLink={
              "https://public.tableau.com/app/profile/kemal.crisannaufal/viz/PixarsIMDbStoryV2/PixarsIMDbStory"
            }
            websiteLink={
              "https://public.tableau.com/app/profile/kemal.crisannaufal/viz/PixarsIMDbStoryV2/PixarsIMDbStory"
            }
            disabled={false}
          />
          <div>
            <p className="text-xs md:text-md lg:text-base mb-2 text-neutral-500 font-medium">
              📄 Description: A Dashboard of Pixar Movies Based on IMDb dataset.
            </p>
            <p className="text-xs md:text-md lg:text-base mr-2">
              💻 Tech Stack : Tableau
            </p>

            <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] hover:scale-110 hover:transition-all hover:duration-300 hover:ease-in-out hover:shadow-lg flex items-center">
              <img
                src="/images/pixar.png"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Portfolio Website",
      content: (
        <div>
          <ProjectButton
            githubLink={"https://github.com/kemalcrisannaufal/kemalcr/"}
            websiteLink={"https://kemalcrisannaufal.vercel.app/"}
            disabled={false}
          />
          <div>
            <p className="text-xs md:text-md lg:text-base mb-2 text-neutral-500 font-medium">
              📄 Description: A personal website showcasing my work, skills, and
              experience.
            </p>

            <div className="mb-2 text-neutral-500 font-medium text-md flex items-center gap-2">
              <p className="text-xs md:text-md lg:text-base mr-2">
                💻 Tech Stack :{" "}
              </p>
              <IconHoverDetail
                icon={
                  <SiJavascript className="text-yellow-500 text-xl md:text-2xl" />
                }
                name={"Javascript"}
              />
              <IconHoverDetail
                icon={<SiReact className="text-blue-500 text-xl md:text-2xl" />}
                name={"React"}
              />
              <IconHoverDetail
                icon={<SiFramer className="text-red-500 text-xl md:text-2xl" />}
                name={"Framer"}
              />
              <IconHoverDetail
                icon={
                  <SiTailwindcss className="text-blue-500 text-xl md:text-2xl" />
                }
                name={"Tailwind CSS"}
              />
            </div>

            <p className="text-xs md:text-md lg:text-base mb-2 text-neutral-500 font-medium">
              🎨 Inspired by{" "}
              <a
                href="https://aulianza.id/"
                className="text-blue-500 font-bold"
              >
                @aulianza
              </a>
            </p>
            <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] hover:scale-110 hover:transition-all hover:duration-300 hover:ease-in-out hover:shadow-lg flex items-center">
              <img
                src="/images/portfolio-image-1.png"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
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
            disabled={false}
          />
          <div>
            <p className="text-xs md:text-md lg:text-base mb-2 text-neutral-500 font-medium">
              📄 Description: A blogging platform that allows users to create,
              edit, and publish blog posts.
            </p>
            <div className="mb-2 text-neutral-500 font-medium text-md flex items-center gap-2">
              <p className="text-xs md:text-md lg:text-base mr-2">
                💻 Tech Stack :{" "}
              </p>
              <IconHoverDetail
                icon={
                  <SiTypescript className="text-yellow-500 text-xl md:text-2xl" />
                }
                name={"Typescript"}
              />
              <IconHoverDetail
                icon={
                  <SiNextdotjs className="text-black text-xl md:text-2xl" />
                }
                name={"Next.js"}
              />
              <IconHoverDetail
                icon={
                  <SiTailwindcss className="text-blue-500 text-xl md:text-2xl" />
                }
                name={"Tailwind CSS"}
              />
              <IconHoverDetail
                icon={
                  <SiFirebase className="text-yellow-500 text-xl md:text-2xl" />
                }
                name={"Firebase"}
              />
            </div>
            <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] hover:scale-110 hover:transition-all hover:duration-300 hover:ease-in-out hover:shadow-lg flex items-center">
              <img
                src="/images/blog-2.png"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
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
            disabled={false}
          />
          <div>
            <p className="text-xs md:text-md lg:text-base mb-2 text-neutral-500 font-medium">
              📄 Description: An e-commerce application fetching products from
              Fakestore API.
            </p>
            <div className="mb-2 text-neutral-500 font-medium text-md flex items-center gap-2">
              <p className="text-xs md:text-md lg:text-base mr-2">
                💻 Tech Stack :{" "}
              </p>
              <IconHoverDetail
                icon={<SiReact className="text-blue-500 text-xl md:text-2xl" />}
                name={"React"}
              />
              <IconHoverDetail
                icon={
                  <SiTailwindcss className="text-blue-500 text-xl md:text-2xl" />
                }
                name={"Tailwind CSS"}
              />
              <IconHoverDetail
                icon={<SiApifox className="text-red-500 text-xl md:text-2xl" />}
                name={"Fakestore API"}
              />
            </div>
            <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] hover:scale-110 hover:transition-all hover:duration-300 hover:ease-in-out hover:shadow-lg flex items-center">
              <img
                src="/images/fake-store-3.png"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
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
            disabled={true}
          />
          <div>
            <p className="text-xs md:text-md lg:text-base mb-2 text-neutral-500 font-medium">
              📄 Description: A football information app providing match,
              standing, highlights, and news.
            </p>
            <div className="mb-2 text-neutral-500 font-medium text-md flex items-center gap-2">
              <p className="text-xs md:text-md lg:text-base mr-2">
                💻 Tech Stack :{" "}
              </p>
              <IconHoverDetail
                icon={
                  <SiLaravel className="text-red-500 text-xl md:text-2xl" />
                }
                name={"Laravel"}
              />
              <IconHoverDetail
                icon={<SiMysql className="text-blue-500 text-xl md:text-2xl" />}
                name={"MySQL"}
              />
              <IconHoverDetail
                icon={
                  <SiBootstrap className="text-yellow-500 text-xl md:text-2xl" />
                }
                name={"Bootstrap"}
              />
            </div>
            <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] hover:scale-110 hover:transition-all hover:duration-300 hover:ease-in-out hover:shadow-lg flex items-center">
              <img
                src="/images/maenbal-1.png"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Raedam",
      content: (
        <div>
          <ProjectButton
            githubLink={"https://github.com/kemalcrisannaufal/ParkirRaedam"}
            websiteLink={""}
            disabled={true}
          />
          <div>
            <p className="text-xs md:text-md lg:text-base mb-2 text-neutral-500 font-medium">
              📄 Description: A parking system application for managing parking
              slots.
            </p>
            <div className="mb-2 text-neutral-500 font-medium text-md flex items-center gap-2">
              <p className="text-xs md:text-md lg:text-base mr-2">
                💻 Tech Stack :{" "}
              </p>
              <IconHoverDetail
                icon={<DiJava className="text-red-500 text-xl md:text-2xl" />}
                name={"Java"}
              />

              <IconHoverDetail
                icon={<SiMysql className="text-blue-500 text-xl md:text-2xl" />}
                name={"MySQL"}
              />
            </div>
            <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] hover:scale-110 hover:transition-all hover:duration-300 hover:ease-in-out hover:shadow-lg flex items-center">
              <img
                src="/images/raedam_project.png"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Pneumonia Classification",
      content: (
        <div>
          <ProjectButton
            githubLink={
              "https://github.com/kemalcrisannaufal/Klasifikasi-Pneumonia-dan-TBC"
            }
            websiteLink={""}
            disabled={true}
          />
          <div>
            <p className="text-xs md:text-md lg:text-base mb-2 text-neutral-500 font-medium">
              📄 Description: A deep learning model to classify pneumonia and
              tuberculosis from chest X-ray images.
            </p>
            <div className="mb-2 text-neutral-500 font-medium text-md flex items-center gap-2">
              <p className="text-xs md:text-md lg:text-base mr-2">
                💻 Tech Stack :{" "}
              </p>
              <IconHoverDetail
                icon={
                  <SiJupyter className="text-red-500 text-xl md:text-2xl" />
                }
                name={"Jupyter Notebook"}
              />
              <IconHoverDetail
                icon={
                  <SiPython className="text-yellow-500 text-xl md:text-2xl" />
                }
                name={"Python"}
              />
            </div>
            <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] hover:scale-110 hover:transition-all hover:duration-300 hover:ease-in-out hover:shadow-lg flex items-center">
              <img
                src="/images/paru1.png"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] hover:scale-110 hover:transition-all hover:duration-300 hover:ease-in-out hover:shadow-lg flex items-center">
              <img
                src="/images/paru2.png"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] hover:scale-110 hover:transition-all hover:duration-300 hover:ease-in-out hover:shadow-lg flex items-center">
              <img
                src="/images/paru3.png"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
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
    <motion.div
      initial={{ opacity: 0, x: -15 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 1, x: -15 }}
      transition={{ duration: 0.5 }}
    >
      <ProjectsList />
    </motion.div>
  );
};

export default ProjectsView;
