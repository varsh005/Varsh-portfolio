import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
  FaCheckCircle,
} from "react-icons/fa";

import resumeImg from "../assets/project_images/resume-analysis.webp";
import reelaiImg from "../assets/project_images/reelai.jpg";
import attendanceImg from "../assets/project_images/smart-attendance.webp";
import ecommerceImg from "../assets/project_images/e-commerce.jpg";
import documentqaImg from "../assets/project_images/document-QA.png";
import lipreadingImg from "../assets/project_images/Ai-lipreading.jpg";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "AI Resume Analyzer",
      category: "AI PROJECT",
      image: resumeImg,
      description:
        "An AI-powered resume analysis application that evaluates resumes, extracts important keywords, and provides ATS compatibility scores to help improve job applications.",
      technologies: ["React", "Django", "NLP", "Machine Learning", "SQLite"],
      highlights: [
        "ATS Score",
        "Keyword Extraction",
        "PDF & DOCX Support",
        "Improvement Suggestions",
      ],
      github: "https://github.com/varsh005/Resume_Analyzer",
      demo: "https://resume-analyzer-xwln.onrender.com",
    },
    {
      title: "ReelAI",
      category: "WEB APP",
      image: reelaiImg,
      description:
        "A movie recommendation system that suggests movies based on user preferences using TF-IDF and cosine similarity algorithms.",
      technologies: ["Python", "Django", "TF-IDF", "Cosine Similarity"],
      highlights: [
        "Movie Recommendations",
        "Search Functionality",
        "Similarity Engine",
        "Responsive UI",
      ],
      github: "https://github.com/varsh005/ReelAI-movie-recommendation-system",
      demo: "https://reelai-w1c2.onrender.com",
    },
    {
      title: "Smart Attendance",
      category: "COMPUTER VISION",
      image: attendanceImg,
      description:
        "A face recognition based attendance management system using OpenCV and Django to automate attendance tracking.",
      technologies: ["Python", "Django", "OpenCV", "Face Recognition"],
      highlights: [
        "Face Detection",
        "Automatic Attendance",
        "Real-time Camera",
        "Attendance Records",
      ],
      github: "https://github.com/varsh005/Smart_attendance_system",
      demo: "https://smart-attendance-system-fkuf.onrender.com",
    },
    {
      title: "Market & Co",
      category: "FULL STACK",
      image: ecommerceImg,
      description:
        "A full-stack e-commerce platform with authentication, product management, cart functionality, order processing, and payment integration.",
      technologies: ["React", "Django REST Framework", "JWT", "Razorpay"],
      highlights: [
        "User Authentication",
        "Shopping Cart",
        "Order Management",
        "Payment Integration",
      ],
      github: "https://github.com/varsh005/E-commerce-website",
      demo: "https://e-commerce-website-flame-zeta.vercel.app",
    },
    {
      title: "Document QA Bot",
      category: "GEN AI / NLP",
      image: documentqaImg,
      description:
        "An AI-powered document question answering system that uses semantic vector search and Google Gemini to answer questions from uploaded PDF documents with context-aware responses.",
      technologies: [
        "Django 5",
        "Django REST Framework",
        "FAISS",
        "Google Gemini",
        "SQLite",
        "HTML/CSS/JS",
      ],
      highlights: [
        "PDF Upload",
        "Semantic Vector Search",
        "Google Gemini Integration",
        "Context-Aware Answers",
      ],
      github: "https://github.com/varsh005/Document_QA_Bot",
      demo: "https://document-qa-bot-ed0q.onrender.com",
    },
    {
      title: "AI-Based Lip Reading System",
      category: "COMPUTER VISION",
      image: lipreadingImg,
      description:
        "A computer vision project that predicts spoken words from lip movements captured through a webcam using facial landmark detection and machine learning.",
      technologies: ["Python", "OpenCV", "Mediapipe", "Machine Learning"],
      highlights: [
        "Lip Detection",
        "Real-time Prediction",
        "Facial Landmarks",
        "Word Recognition",
      ],
      github: "https://github.com/varsh005/AI-Based-lip-reading-system",
      demo: "",
    },
  ];

  return (
    <section id="projects" className="bg-black pt-12 pb-12 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-poppins font-light text-purple-400 uppercase tracking-[0.35em] text-lg lg:text-xl mb-5">
            Projects
          </p>

          <h2 className="font-outfit font-extralight text-3xl lg:text-4xl text-white mb-4 leading-tight">
            Built, Tested, and Deployed.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedProject(project)}
              className="relative h-[320px] rounded-[32px] overflow-hidden cursor-pointer group border border-white/10 bg-black"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10"></div>

              <div className="absolute top-5 left-5">
                <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-xs tracking-[0.25em] border border-white/20">
                  {project.category}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-3">
                  {project.title}
                </h3>

                <p className="text-sm text-white/80 font-medium tracking-wide group-hover:text-purple-300 transition">
                  Click to see project details →
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.96 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="bg-black border border-white/10 rounded-[32px] w-full max-w-6xl max-h-[92vh] overflow-y-auto"
              >

                <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                  <div className="flex items-center gap-4 flex-wrap">
                    <h3 className="text-3xl font-bold text-white">
                      {selectedProject.title}
                    </h3>

                    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs tracking-[0.3em] text-gray-300 uppercase">
                      {selectedProject.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    {selectedProject.demo && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-3 rounded-full bg-white text-black font-semibold flex items-center gap-2 hover:scale-[1.02] transition"
                      >
                        Visit
                        <FaExternalLinkAlt className="text-sm" />
                      </a>
                    )}

                    <button
                      onClick={() => setSelectedProject(null)}
                      className="w-14 h-14 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-white/10 transition"
                    >
                      <FaTimes className="text-lg" />
                    </button>
                  </div>
                </div>

                <div className="grid lg:grid-cols-[1.7fr_0.9fr] gap-0">

                  <div className="border-r border-white/10">
                    <div className="relative">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-[520px] object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                      <div className="absolute top-5 left-5">
                        <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs tracking-[0.3em] uppercase">
                          Detail View
                        </span>
                      </div>
                    </div>

                    <div className="p-8 space-y-8">

                      <div>
                        <p className="text-xs tracking-[0.35em] text-gray-400 mb-5 uppercase">
                          Overview
                        </p>

                        <p className="text-gray-300 text-lg leading-9">
                          {selectedProject.description}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs tracking-[0.35em] text-gray-400 mb-5 uppercase">
                          Highlights
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4">
                          {selectedProject.highlights?.map((item, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-gray-200"
                            >
                              <FaCheckCircle className="text-purple-400 shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="p-7 space-y-7">

                    <div className="rounded-[28px] border border-white/10 bg-white/5 p-7">
                      <p className="text-xs tracking-[0.35em] text-gray-400 mb-6 uppercase">
                        Tech Stack
                      </p>

                      <div className="flex flex-wrap gap-3">
                        {selectedProject.technologies?.map((tech, i) => (
                          <span
                            key={i}
                            className="px-4 py-3 rounded-full border border-white/10 bg-black text-gray-200 text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[28px] border border-white/10 bg-white/5 p-7 space-y-5">
                      <p className="text-xs tracking-[0.35em] text-gray-400 uppercase">
                        Action
                      </p>

                      <p className="text-gray-400 leading-8">
                        Open the live build if it is available, or keep this modal open to scan the stack and feature summary.
                      </p>

                      {selectedProject.demo ? (
                        <a
                          href={selectedProject.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full flex items-center justify-center gap-3 rounded-[24px] bg-white text-black font-semibold py-5 hover:scale-[1.01] transition"
                        >
                          Visit Live Project
                          <FaExternalLinkAlt />
                        </a>
                      ) : (
                        <div className="w-full flex items-center justify-center rounded-[24px] border border-white/10 bg-black text-gray-400 font-semibold py-5">
                          Live link unavailable
                        </div>
                      )}

                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full flex items-center justify-center gap-3 rounded-[24px] border border-white/10 bg-black text-white font-semibold py-5 hover:bg-white/5 transition"
                      >
                        View GitHub
                        <FaGithub />
                      </a>
                    </div>

                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Projects;
            