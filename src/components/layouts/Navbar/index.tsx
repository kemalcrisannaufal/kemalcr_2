import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import NavItem from "./NavItem";

const NavLink = ({
  name,
  link,
  isActive,
}: {
  name: string;
  link: string;
  isActive: boolean;
}) => {
  return (
    <Link
      href={link}
      className={`${
        isActive
          ? "underline underline-offset-8 decoration-teal-500 decoration-4"
          : "no-underline"
      } focus:outline-none select-none`}
    >
      <p className="hover:text-teal-500">{name}</p>
    </Link>
  );
};

const Navbar = () => {
  const { pathname } = useRouter();
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const handleClick = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <div className="w-full h-[4rem] flex justify-between items-center py-5 px-10 overflow-hidden">
      <div>
        <Link href={"/"}>
          <p className="text-neutral-800 text-2xl font-medium">KCR</p>
        </Link>
      </div>

      <div className="block md:hidden">
        <button onClick={handleClick}>
          <FaBars className="text-xl" />
        </button>
      </div>

      <div className="hidden md:block">
        <ul className="flex items-center gap-5">
          <li>
            <NavLink name={"Home"} link="/" isActive={pathname === "/"} />
          </li>
          <li>
            <NavLink
              name={"About"}
              link="/about"
              isActive={pathname === "/about"}
            />
          </li>
          <li>
            <NavLink
              name={"Projects"}
              link="/projects"
              isActive={pathname === "/projects"}
            />
          </li>
          <li>
            <NavLink
              name={"Blogs"}
              link="/blogs"
              isActive={pathname === "/blogs"}
            />
          </li>
          <li>
            <NavLink
              name={"Contact"}
              link="/contact"
              isActive={pathname === "/contact"}
            />
          </li>
        </ul>
      </div>

      <AnimatePresence>
        {isSideBarOpen && (
          <motion.div
            key="mobile-sidebar"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -5, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 top-14 py-5 bg-white z-50 md:hidden"
          >
            <div className="px-8 w-full">
              <ul className="flex flex-col items-start gap-5 w-full">
                <NavItem destination="/" name="Home" onClick={handleClick} />
                <NavItem
                  destination="/about"
                  name="About"
                  onClick={handleClick}
                />
                <NavItem
                  destination="/projects"
                  name="Projects"
                  onClick={handleClick}
                />
                <NavItem
                  destination="/blogs"
                  name="Blogs"
                  onClick={handleClick}
                />
                <NavItem
                  destination="/contact"
                  name="Contact"
                  onClick={handleClick}
                />
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
