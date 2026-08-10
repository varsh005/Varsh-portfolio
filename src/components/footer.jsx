import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#090F1C] py-8 text-center border-t border-purple-500/10">

      <p className="text-gray-400">
        © {new Date().getFullYear()} Varshini Subramani.
        Built with React, Tailwind CSS & Framer Motion.
      </p>

      <p className="text-gray-500 mt-3 flex justify-center items-center gap-2">
        Made with <FaHeart className="text-red-500" /> in India
      </p>

    </footer>
  );
}

export default Footer;