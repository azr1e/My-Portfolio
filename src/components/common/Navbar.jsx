import { Link } from "react-router-dom"
import { useTheme } from "@/lib/ThemeContext"

function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-800 dark:border-gray-800 bg-white dark:bg-gray-950">
      <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white">AZ</Link>
      <div className="flex items-center gap-6">
        <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">Home</Link>
        <Link to="/projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">Projects</Link>
        <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">Contact</Link>
        <button onClick={toggleTheme} className="px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white text-sm">
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  )
}

export default Navbar