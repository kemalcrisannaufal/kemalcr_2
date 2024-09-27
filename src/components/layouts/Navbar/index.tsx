import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import NavItem from "./NavItem";

const Navbar = () => {
  const { pathname } = useRouter();
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const handleClick = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  useEffect(() => {
    setIsSideBarOpen(false);
  }, [pathname]);

  return (
    <div className="w-full h-[4rem] flex justify-between items-center py-5 px-10 overflow-hidden">
      <div>
        <Link href={"/"}>
          <p className="text-neutral-800 text-2xl font-medium">KCR</p>
        </Link>
      </div>

      <div className="block md:hidden">
        <button onClick={handleClick}>
          <FaBars />
        </button>
      </div>

      <div className="hidden md:block">
        <ul className="flex items-center gap-5">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
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
                <NavItem destination="/" name="Home" />
                <NavItem destination="/about" name="About" />
                <NavItem destination="/projects" name="Projects" />
                <NavItem destination="/blogs" name="Blogs" />
                <NavItem destination="/contact" name="Contact" />
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
