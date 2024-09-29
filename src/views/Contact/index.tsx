import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import ContactButton from "@/components/elements/ContactButton";
import { motion } from "framer-motion";
const ContactView = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h1 className="text-neutral-800 text-xl lg:text-2xl font-semibold">
          Let's Connect
        </h1>
        <p className="text-xs sm:text-sm md:text-md lg:text-base mt-2">
          Interested in collaborating or have any questions? Feel free to reach
          out to me! I'm always open to new opportunities and projects
        </p>
      </div>
      <div className="mt-5 flex items-center justify-center md:justify-start gap-4">
        <ContactButton
          icon={<FaEnvelope className="text-xl" />}
          label={"Email"}
          classname="bg-gradient-to-r from-teal-600 to-teal-400"
          link={"mailto:kemalcrisannnaufal@gmail.com"}
        />
        <ContactButton
          icon={<FaLinkedin className="text-xl" />}
          label={"Linkedin"}
          classname="bg-gradient-to-r from-blue-600 to-blue-400"
          link={"https://www.linkedin.com/in/kemalcrisannaufal/"}
        />
        <ContactButton
          icon={<FaGithub className="text-xl" />}
          label={"Github"}
          classname="bg-gradient-to-r from-slate-800 to-slate-600"
          link={"https://github.com/kemalcrisannaufal"}
        />
        <ContactButton
          icon={<FaInstagram className="text-xl" />}
          label={"Instagram"}
          classname="bg-gradient-to-r from-red-600 to-red-400"
          link={"https://www.instagram.com/kemal_crisannaufal/"}
        />
      </div>

      <h1 className="text-neutral-800 text-xl lg:text-2xl font-semibold mb-2 mt-10">
        Send Me a Message
      </h1>

      <div className="md:flex gap-5">
        <div className="md:w-3/4 border pt-3 pb-6 px-4 rounded-lg bg-gradient-to-b from-blue-100 to-teal-50">
          <form action="">
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div>
                <label
                  htmlFor="name"
                  className="text-xs sm:text-sm md:text-md text-neutral-700 font-semibold"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border p-2 mt-2 rounded-lg focus:outline-none focus:ring-2 text-xs sm:text-sm md:text-md"
                  placeholder="Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-xs sm:text-sm md:text-md text-neutral-700 font-semibold"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border p-2 mt-2 rounded-lg focus:outline-none focus:ring-2 text-xs sm:text-sm md:text-md"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="message"
                className="text-xs sm:text-sm md:text-md text-neutral-700 font-semibold"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="w-full border focus:outline-none focus:ring-2 rounded-lg p-3 mt-2 text-xs sm:text-sm md:text-md"
                rows={10}
              ></textarea>
            </div>
            <div>
              <button className="w-full border rounded-lg p-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 text-white font-semibold">
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="hidden md:block w-1/4">
          <div className="w-72 border h-max mx-auto p-3 pb-5 rounded-lg shadow-lg border border-2 border-teal-100">
            <div className="w-64 h-60 rounded-lg overflow-hidden mx-auto border border-2 border-blue-100 hover:scale-105 hover:rotate-3 transition-all duration-300 ease-in-out">
              <img
                src="/images/profil.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-2">
              <p className="text-xl font-medium text-neutral-800">
                Kemal Crisannaufal
                <span className="animate-wiggle inline-block text-lg md:text-xl lg:text-3xl">
                  👋
                </span>
              </p>
              <p className="text-md font-normal text-neutral-600">@kemalcr</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactView;
