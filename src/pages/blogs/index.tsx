import { motion } from "framer-motion";


const BlogsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="h-[65vh] flex flex-col justify-center items-center"
    >
      <div className="w-[60%] h-[20%] lg:w-[30%] lg:h-[30%] mb-5 lg:mb-10">
        <img
          src={"/svg/under_development.svg"}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <p className="text-md lg:text-xl text-center text-neutral-700 font-semibold">
        This feature is currently under development. Stay tuned for updates!
      </p>
    </motion.div>
  );
};

export default BlogsPage;
