import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const HomeView = () => {
  const words = [
    {
      text: "Kemal",
    },
    {
      text: "Crisannaufal",
    },
  ];
  return (
    <div className="w-full min-h-[80vh] flex">
      <div className="w-full flex flex-col justify-center items-center">
        <TypewriterEffectSmooth words={words} />
        <div>
          <p className="hidden md:block text-center text-md">
            I am a Computer Science student at Telkom University, specializing
            in Machine Learning, Data Science, and Software Engineering.
          </p>
          <p className="block md:hidden text-center text-xs">
            | Machine Learning | Data Science | Software Engineering |
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
