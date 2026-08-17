const skills = ["HTML", "CSS", "Java", "JavaScript", "UI Design"]

function SkillsSection() {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-white mb-8">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-5 py-2 bg-gray-800 text-gray-200 rounded-full border border-gray-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection