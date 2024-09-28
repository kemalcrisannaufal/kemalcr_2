import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const NavItem = ({
  destination,
  name,
}: {
  destination: string;
  name: string;
}) => {
  return (
    <li className="w-full border rounded p-2 hover:border-slate-800 md:border-none md:p-0 md:mb-0">
      <Link
        href={destination}
        className="p-2 flex justify-between items-center"
      >
        {name}

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
        >
          <FaArrowRight className="text-neutral-500 md:hidden" />
        </motion.div>
      </Link>
    </li>
  );
};

export default NavItem;
