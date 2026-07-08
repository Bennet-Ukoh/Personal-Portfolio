import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500 dark:text-gray-400">
      <div className="mb-3 flex items-center justify-center gap-4">
        <a
          href="https://linkedin.com/in/ukohbennet"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-lg transition hover:text-gray-700 dark:hover:text-gray-300"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Bennet-Ukoh"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-xl transition hover:text-gray-700 dark:hover:text-gray-300"
        >
          <FaGithubSquare />
        </a>
      </div>
      <small className="mb-1 block text-xs">
        &copy; {new Date().getFullYear()} Bennet Ukoh. All rights reserved.
      </small>
      <small className="block text-xs">
        Built with Next.js, Tailwind CSS &amp; Framer Motion.
      </small>
    </footer>
  );
}
