import { FaDotCircle } from "react-icons/fa";

const EducationCard = ({
  logoPath,
  name,
  years,
  major,
  place,
}: {
  logoPath: string;
  name: string;
  years: string;
  major: string;
  place: string;
}) => {
  return (
    <div className="flex items-center gap-2 border rounded-xl shadow-lg p-4 hover:border-4 hover:border-gradient-to-r relative z-50">
      <div className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 overflow-hidden">
        <img
          src={logoPath}
          alt="Description"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="w-full">
        <p className="text-neutral-500 text-md md:text-lg lg:text-2xl font-medium text-center">
          {name}
        </p>
        <hr className="w-full my-2" />
        <div className="w-full flex justify-center gap-4 lg:gap-5">
          <div className="flex items-center gap-2">
            <FaDotCircle className="text-xs text-blue-500" />
            <p className="text-xs md:text-md lg:text-base">{years}</p>
          </div>
          <div className="flex items-center gap-2">
            <FaDotCircle className="text-xs text-teal-500" />
            <p className="text-xs md:text-md lg:text-base">{major}</p>
          </div>

          <div className="hidden md:flex md:items-center md:gap-2">
            <FaDotCircle className="text-xs text-cyan-500" />
            <p className="text-xs md:text-md lg:text-base">{place}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
