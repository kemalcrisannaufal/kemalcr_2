import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import TechStack from "@/components/elements/TechStack";
import { techStacks } from "@/common/constant/techStack";

const HomeView = () => {
  const words = [
    {
      text: "Kemal",
    },
    {
      text: "Crisannaufal",
    },
  ];
  const halfLength = Math.ceil(techStacks.length / 2);
  const firstHalf = techStacks.slice(0, halfLength);
  const secondHalf = techStacks.slice(halfLength);

  return (
    <div className="w-full min-h-[80vh] flex">
      <div className="w-full flex flex-col justify-center items-center">
        <TypewriterEffectSmooth words={words} />
        <div>
          <p className="text-center text-sm md:text-lg -mt-4 mb-4 text-neutral-600 font-medium">
            Computer Science student at Telkom University.
          </p>
          <div className="flex gap-1 sm:gap-2 select-none">
            <div className="text-xs sm:text-md bg-gradient-to-r from-teal-500 to-teal-300 px-2 sm:px-4 py-2 text-white font-medium inline-block rounded-l">
              Machine Learning
            </div>
            <div className="text-xs sm:text-md bg-gradient-to-r from-blue-500 to-blue-300 px-2 sm:px-4 py-2 text-white font-medium inline-block">
              Data Science
            </div>
            <div className="text-xs sm:text-md bg-gradient-to-r from-cyan-500 to-cyan-300 px-2 sm:px-4 py-2 text-white font-medium inline-block rounded-r">
              Software Engineering
            </div>
          </div>
        </div>

        <div className="hidden md:block w-[80%] lg:w-[50%]">
          <TechStack techStacks={techStacks} />
        </div>

        <div className="md:hidden w-[80%]">
          <TechStack techStacks={firstHalf} />
        </div>
        <div className="md:hidden w-[60%]">
          <TechStack techStacks={secondHalf} toRight={true} />
        </div>
      </div>
    </div>
  );
};

export default HomeView;
