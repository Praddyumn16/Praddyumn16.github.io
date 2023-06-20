import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_wfpssvb",
        "template_eprvg3x",
        {
          from_name: form.name,
          to_name: "Praddyumn",
          from_email: form.email,
          to_email: "spraddyumn@gmail.com",
          message: form.message,
        },
        "uyW4nb5hRTXrvJpmx"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thanks for the message! I'll get back to you soon :) ");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong!");
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Want to get in touch?</p>
        <h3 className={styles.sectionHeadText}>Shoot.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              required
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              required
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="font-medium mb-4">Your Message</span>
            <textarea
              rows="5"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you wanna say?"
              required
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg font-medium"
            />
          </label>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 w-fit font-bold shadow-lg shadow-primary rounded-xl"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[500px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
