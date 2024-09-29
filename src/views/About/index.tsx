import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaFile } from "react-icons/fa";
import { techStacks } from "@/common/constant/techStack";
import IconHoverDetail from "@/components/elements/IconHoverDetail";
import { TechStackItemType } from "@/types/TechStackItem";
import EducationCard from "@/components/elements/EducationCard";

const AboutView = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 10 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="w-full flex flex-col"
    >
      <h1 className="text-2xl md:text-3xl xl:text-4xl text-neutral-800 font-medium text-center">
        About Me
      </h1>
      <div className="w-full mt-5 flex flex-col  md:flex-row gap-5 items-center p-3">
        <div className="w-26 h-26 lg:w-42 lg:h-42 p-1 rounded-full bg-gradient-to-r from-blue-500 to-teal-300 group">
          <div className="w-24 h-24 lg:w-40 lg:h-40 overflow-hidden rounded-full group-hover:scale-110 transition-all duration-300 ease-in-out">
            <img
              src="/images/profil.jpg"
              alt="kemalcrisannaufal"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div>
          <p className="text-base md:text-xl lg:text-2xl font-semibold">
            Hello, I'm Kemal
            <span className="animate-wiggle inline-block text-lg md:text-xl lg:text-3xl">
              👋
            </span>
          </p>

          <p className="mt-2 text-neutral-800 text-xs md:text-sm lg:text-lg tracking-wide font-thin text-justify">
            Hi, I'm Kemal Crisannaufal, a 7th-semester Computer Science student
            at Telkom University. I'm currently interested in web programming.
            I'm also working on my final project in the field of computer vision
            and machine learning. Feel free to contact me anytime 😄
          </p>

          <div className="mt-4 flex gap-3 h-10">
            <a href="https://www.linkedin.com/in/kemalcrisannaufal/">
              <div className="h-full p-2 px-3 bg-blue-600 rounded text-white flex items-center gap-4 cursor-pointer font-medium hover:opacity-75">
                <FaLinkedin />
              </div>
            </a>
            <a href="https://github.com/kemalcrisannaufal">
              <div className="h-full p-2 px-3 bg-neutral-700 rounded text-white flex items-center gap-4 cursor-pointer font-medium hover:opacity-75">
                <FaGithub />
              </div>
            </a>
            <a href="/resume/KEMAL CRISANNAUFAL_CV.pdf">
              <div className="h-full p-2 px-3 bg-gradient-to-r from-blue-500 to-teal-400 rounded text-white flex items-center gap-4 cursor-pointer font-medium hover:opacity-75">
                <FaFile />
                Resume
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-5 lg:mt-10">
        <h3 className="text-xl lg:text-2xl text-neutral-700 font-semibold">
          Education
        </h3>
        <div className="grid md:grid-cols-2 gap-4 mt-3">
          <EducationCard
            logoPath="/images/Tel_U.jpg"
            name="Telkom University"
            years="2021-2025"
            place="Bandung, Indonesia"
            major="S1 Informatika"
          />
          <EducationCard
            logoPath="/images/smanja.jpg"
            name="SMAN 1 Jatinangor"
            years="2018-2021"
            place="Sumedang, Indonesia"
            major="MIPA"
          />
        </div>
      </div>

      <div className="mt-5 lg:mt-10">
        <h3 className="text-xl lg:text-2xl text-neutral-700 font-semibold">
          Tech Stack
        </h3>
        <div className="w-full mt-3 flex justify-center flex-wrap gap-4">
          {techStacks.map((item: TechStackItemType, index: number) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: 0.2 * index,
              }}
              key={index}
            >
              <IconHoverDetail
                name={item.name}
                className={
                  "p-3 lg:px-5 bg-neutral-100 border rounded-full shadow-sm"
                }
                icon={<item.icon className={`${item.className} lg:text-3xl`} />}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AboutView;
