/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import ContactButton from "@/components/elements/ContactButton";
import { AnimatePresence, motion } from "framer-motion";
import useSWR from "swr";
import { fetcher } from "@/lib/swr/fetcher";
import { useState } from "react";
import { useRouter } from "next/router";

const ContactView = () => {
  const { data } = useSWR("/api/messages/", fetcher);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const { push } = useRouter();

  const handleClick = () => {
    setIsMessageOpen(!isMessageOpen);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const messageData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };

    if (!messageData.name || !messageData.email || !messageData.message) {
      return;
    }

    const response = await fetch("/api/messages/store", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messageData),
    });

    if (response.status === 200) {
      event.target.reset();
      push("/contact");
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
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
          <form onSubmit={handleSubmit}>
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
                  maxLength={15}
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
                maxLength={500}
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full border rounded-lg p-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 text-white font-semibold"
              >
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

      <div className="absolute -bottom-20 right-0 lg:bottom-5 md:right-48 z-50">
        <button
          onClick={handleClick}
          className="border p-3 rounded-full shadow-lg text-md bg-gradient-to-r from-blue-500 to-blue-300 text-white font-medium"
        >
          See Message
        </button>
      </div>

      <AnimatePresence>
        {isMessageOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={` ${
              !isMessageOpen
                ? "hidden"
                : "absolute w-3/4 lg:w-1/4 lg:h-[75vh] bg-gradient-to-b from-neutral-200 to-neutral-100 rounded-lg p-5 z-40 right-0 top-0 overflow-auto"
            }`}
          >
            {data &&
              data.data.map((item: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  exit={{ opacity: 0 }}
                  className="border rounded-lg p-3 shadow-lg border-2 border-teal-100 mb-3 bg-white"
                >
                  <p className="text-base font-medium text-neutral-800 break-words">
                    {item.name}
                  </p>
                  <p className="text-sm font-normal text-neutral-600 break-words">
                    {item.message}
                  </p>
                </motion.div>
              ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ContactView;
