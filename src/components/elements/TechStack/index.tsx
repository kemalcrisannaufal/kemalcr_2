import TechStackItem from "./TechStackItem";
import { TechStackItemType } from "@/types/TechStackItem";

const TechStack = ({
  techStacks,
  toRight,
}: {
  techStacks: TechStackItemType[];
  toRight?: boolean;
}) => {
  const doubledTechStacks = [...techStacks, ...techStacks];

  return (
    <div className="w-full overflow-hidden whitespace-nowrap mt-5">
      <div
        className={`flex ${
          toRight ? "animate-slideRight" : "animate-slideLeft"
        } gap-3`}
      >
        {doubledTechStacks.map((item: TechStackItemType, index: number) => (
          <TechStackItem
            key={index}
            name={item.name}
            icon={<item.icon className={item.className} />}
          />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
