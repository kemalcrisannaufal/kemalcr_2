import Link from "next/link";

const ContactButton = ({
  icon,
  label,
  classname,
  link,
}: {
  icon: React.ReactNode;
  label: string;
  classname: string;
  link: string;
}) => {
  return (
    <>
      <Link
        href={link}
        className={`border lg:w-[10rem] px-4 py-2 w-max flex justify-center items-center gap-2 rounded-lg text-white ${classname} hover:scale-110 transition-all duration-500 ease-in-out`}
      >
        {icon}
        <p className="hidden md:block text-xs sm:text-sm md:text-md lg:text-base font-semibold">
          {label}
        </p>
      </Link>
    </>
  );
};

export default ContactButton;
