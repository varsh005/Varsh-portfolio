import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setSending(true);

    emailjs
      .sendForm(
        "service_9j63nya",
        "template_3j7p19m",
        form.current,
        "KOsrZd4B79XdvRWBL"
      )
      .then(
        () => {
          setSending(false);
          setSuccess(true);
          form.current.reset();

          setTimeout(() => setSuccess(false), 4000);
        },
        (error) => {
          setSending(false);
          alert("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-poppins font-light text-purple-400 uppercase tracking-[0.35em] text-lg lg:text-xl mb-5">
            Contact
          </p>

          <h2 className="font-outfit font-extralight text-4xl lg:text-5xl text-white mb-6 leading-tight">
            Let's build something meaningful
          </h2>

          <p className="text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto leading-9">
            Open to new conversations, collaborations, and opportunities to learn and contribute!
          </p>
        </motion.div>

        {/* Bottom Section */}

        <div className="grid lg:grid-cols-2 gap-14 mt-20 items-start">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold text-white mb-10">
              What I bring
            </h3>

            <div className="space-y-8">

              <div className="flex items-start gap-4">
                <div className="w-2.5 h-2.5 rounded-full bg-purple-400 mt-3 flex-shrink-0"></div>

                <div>
                  <p className="text-white font-medium text-lg mb-2">
                    Ideas into experiences
                  </p>

                  <p className="text-gray-400 leading-8">
                    Turning simple ideas into engaging digital experiences.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2.5 h-2.5 rounded-full bg-purple-400 mt-3 flex-shrink-0"></div>

                <div>
                  <p className="text-white font-medium text-lg mb-2">
                    Curiosity driven development
                  </p>

                  <p className="text-gray-400 leading-8">
                    Exploring better tools, patterns, and possibilities.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2.5 h-2.5 rounded-full bg-purple-400 mt-3 flex-shrink-0"></div>

                <div>
                  <p className="text-white font-medium text-lg mb-2">
                    Design with purpose
                  </p>

                  <p className="text-gray-400 leading-8">
                    Creating interfaces that feel intuitive and elegant.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2.5 h-2.5 rounded-full bg-purple-400 mt-3 flex-shrink-0"></div>

                <div>
                  <p className="text-white font-medium text-lg mb-2">
                    Build, refine, improve
                  </p>

                  <p className="text-gray-400 leading-8">
                    Continuously improving projects through iteration.
                  </p>
                </div>
              </div>

            </div>

            {/* Location */}

            <div className="flex items-center gap-3 mt-15 ml-1 ">
               <FaMapMarkerAlt className="text-purple-400 text-lg" />

              <div>

                <p className="text-white text-lg">
                  Coimbatore, India
                </p>
              </div>
            </div>

            {/* Social Icons */}

            <div className="flex flex-wrap items-center gap-6 mt-6 ">

              <a
                href="mailto:varshinisubramani005@gmail.com"
                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:text-purple-300 hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300"
              >
                <FaEnvelope className="text-lg" />
              </a>

              <a
                href="https://www.linkedin.com/in/varshini-subramani"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:text-purple-300 hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300"
              >
                <FaLinkedin className="text-lg" />
              </a>

              <a
                href="https://github.com/varsh005"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:text-purple-300 hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300"
              >
                <FaGithub className="text-lg" />
              </a>

              <a
                href="tel:+918072534457"
                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:text-purple-300 hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300"
              >
                <FaPhoneAlt className="text-lg" />
              </a>

            </div>
          </motion.div>

          {/* Right Side - Form */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="bg-black border border-white/10 rounded-3xl p-8 hover:border-purple-500/40 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-white mb-8">
              Let’s connect
            </h3>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-5"
            >

              <div className="grid sm:grid-cols-2 gap-5">

                <input
                  type="text"
                  name="first_name"
                  placeholder="First name"
                  required
                  className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500/40 transition"
                />

                <input
                  type="text"
                  name="last_name"
                  placeholder="Last name"
                  required
                  className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500/40 transition"
                />

              </div>

              <input
                type="email"
                name="email"
                placeholder="Email address"
                required
                className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500/40 transition"
              />

              <input
                type="text"
                name="subject"
                placeholder="How can I help you?"
                required
                className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500/40 transition"
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Your message..."
                required
                className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500/40 transition resize-none"
              ></textarea>

              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center justify-center rounded-2xl bg-white text-black font-semibold px-6 py-3 hover:scale-[1.01] transition duration-300 disabled:opacity-70"
              >
                {sending ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <p className="text-green-400 mt-3">
                  Message sent successfully! 🎉
                </p>
              )}

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;