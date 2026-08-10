import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

// Logo images
import ibmLogo from "../assets/project_images/certificate-symbols/IBM-Symbol.jpg";
import infosysLogo from "../assets/project_images/certificate-symbols/Infosys-symbol.jpg";
import simplilearnLogo from "../assets/project_images/certificate-symbols/simplilearn-symbol.jpg";
import anthropicLogo from "../assets/project_images/certificate-symbols/Anthropic-symbol.png";

function Certifications() {
  const certificates = [
    {
      title: "Web Development Fundamentals",
      issuer: "IBM",
      year: "2026",
      logo: ibmLogo,
      link: "/certificates/web-fundamentals(IBM).png",
    },
    {
      title: "Explore Machine Learning Using Python",
      issuer: "Infosys Springboard",
      year: "2026",
      logo: infosysLogo,
      link: "/certificates/explore-machinelearning-using-python.pdf",
    },
    {
      title: "Python Django",
      issuer: "Simplilearn",
      year: "2026",
      logo: simplilearnLogo,
      link: "/certificates/python-Django.pdf",
    },
    {
      title: "Applied Generative AI",
      issuer: "Infosys Springboard",
      year: "2026",
      logo: infosysLogo,
      link: "/certificates/Applied-generative-AI.pdf",
    },
    {
      title: "Claude Code in Action",
      issuer: "Anthropic",
      year: "2026",
      logo: anthropicLogo,
      link: "/certificates/claude-action.pdf",
    },
    {
      title: "Introduction to SQL",
      issuer: "Simplilearn",
      year: "2026",
      logo: simplilearnLogo,
      link: "/certificates/Introduction-to-SQL.pdf",
    },
  ];

  return (
    <section id="certifications" className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-poppins font-light text-purple-400 uppercase tracking-[0.35em] text-lg lg:text-xl mb-5">
            Certifications
          </p>

          <h2 className="font-outfit font-extralight text-3xl lg:text-4xl text-white mb-4 leading-tight">
            Certifications that support my learning journey.
          </h2>
        </motion.div>

        {/* Certificate Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-black border border-white/10 rounded-3xl p-8 hover:border-purple-500/40 transition-all duration-300 flex flex-col min-h-[260px]"
            >

              {/* Logo */}

              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 p-2">
                <img
                  src={cert.logo}
                  alt={cert.issuer}
                  className="w-8 h-8 object-contain"
                />
              </div>

              {/* Title */}

              <h3 className="text-xl font-semibold text-white leading-8 mb-3">
                {cert.title}
              </h3>

              {/* Issuer */}

              <p className="text-gray-400 uppercase text-sm tracking-wide mb-6">
                {cert.issuer}
              </p>

              <div className="border-t border-white/10 pt-5 mt-auto flex items-center justify-between">

                {/* Certificate Button */}

                <span
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-200 text-sm select-none cursor-default"
                >
                  Certificate
                </span>

                {/* Open Icon */}

                <div className="flex items-center text-gray-400">

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition"
                    title="Open"
                  >
                    <FaExternalLinkAlt className="text-lg" />
                  </a>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;