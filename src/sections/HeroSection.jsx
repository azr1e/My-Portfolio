import { Link } from "react-router-dom"
import profilePic from "@/assets/Portfolio-pfp.png"

function HeroSection() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 py-20 max-w-6xl mx-auto">
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Azriel James Salanatin
        </h1>
        <h3 className="text-xl text-blue-600 dark:text-blue-400 mt-2">BSIT Student</h3>
        <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-md">
          I enjoy learning new technologies and creating clean, simple projects that sharpen my skills.
        </p>
        <Link
          to="/projects"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          See My Projects
        </Link>
      </div>
      <img
        src={profilePic}
        alt="Azriel James Salanatin profile picture"
        className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-blue-500"
      />
    </section>
  )
}

export default HeroSection