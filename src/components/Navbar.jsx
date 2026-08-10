import { useEffect, useState } from "react";
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineCodeBracket,
  HiOutlineBriefcase,
  HiOutlineAcademicCap,
  HiOutlineEnvelope,
} from "react-icons/hi2";
import { RiProjectorLine } from "react-icons/ri";
import { PiCertificateBold } from "react-icons/pi";
import { FaTrophy } from "react-icons/fa";

function Navbar() {
  const [active, setActive] = useState("home");

  const items = [
    { id: "home", label: "Home", icon: HiOutlineHome },
    { id: "about", label: "About", icon: HiOutlineUser },
    { id: "skills", label: "Skills", icon: HiOutlineCodeBracket },
    { id: "projects", label: "Projects", icon: RiProjectorLine },
    { id: "experience", label: "Experience", icon: HiOutlineBriefcase },
    { id: "certifications", label: "Certifications", icon: PiCertificateBold },
    { id: "achievements", label: "Achievements", icon: FaTrophy },
    { id: "education", label: "Education", icon: HiOutlineAcademicCap },
    { id: "contact", label: "Contact", icon: HiOutlineEnvelope },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = items
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];

        if (scrollPosition >= section.offsetTop) {
          setActive(section.id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-3 px-5 py-3 rounded-full bg-black/70 backdrop-blur-xl border border-purple-500/20 shadow-[0_0_25px_rgba(168,85,247,0.18)]">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group relative"
            >
              <div
                className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isActive
                    ? "bg-purple-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.45)] scale-110"
                    : "bg-white/5 text-gray-300 hover:bg-purple-500/10 hover:text-purple-300 hover:scale-105 border border-white/10"
                }`}
              >
                <Icon className="text-[20px]" />
              </div>

              {/* Tooltip */}

              <div className="absolute left-1/2 -translate-x-1/2 top-14 opacity-0 group-hover:opacity-100 pointer-events-none transition duration-200">
                <div className="px-3 py-1.5 rounded-lg bg-[#111111] border border-purple-500/20 text-xs text-gray-200 whitespace-nowrap shadow-lg">
                  {item.label}
                </div>
              </div>
            </a>
          );
        })}
      </nav>
    </div>
  );
}

export default Navbar;