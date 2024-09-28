import { ReactNode } from "react";

const TechStackItem = ({ name, icon }: { name: string; icon: ReactNode }) => {
  return (
    <>
      <div className="flex items-center border rounded-full px-4 py-2 gap-2 bg-slate-100">
        {icon}
        <p className="hidden md:block text-md font-semibold text-neutral-500">
          {name}
        </p>
      </div>
    </>
  );
};

export default TechStackItem;
