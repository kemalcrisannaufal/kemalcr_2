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
      <div className="mt-5 flex items-center justify-start gap-4">
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
      <div>
        <div className="md:w-[70%] border pt-3 pb-6 px-4 rounded-lg bg-gradient-to-b from-neutral-100 to-neutral-50">
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
                  className="w-full border p-2 mt-2 rounded-lg focus:outline-none focus:ring-2"
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
                  className="w-full border p-2 mt-2 rounded-lg focus:outline-none focus:ring-2"
                  placeholder="Email"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-xs sm:text-sm md:text-md text-neutral-700 font-semibold"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="w-full border focus:outline-none focus:ring-2 rounded-lg p-3 mt-2"
                rows={10}
              ></textarea>
            </div>
            <div>
              <button className="w-full border rounded-lg p-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 text-white">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactView;
