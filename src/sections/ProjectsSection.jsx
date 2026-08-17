import ProjectCard from "@/components/features/ProjectCard"

const projects = [
  {
    title: "Individual Activity",
    tags: ["HTML", "CSS"],
    links: [
      { label: "Live Site", url: "https://myoldportfolioindividual.netlify.app/" },
    ],
  },
  {
    title: "Group Activities",
    tags: [],
    links: [
      { label: "GitHub", url: "https://edprogrammerist.github.io/S.I.A.P-Activity-2/" },
      { label: "Figma", url: "https://www.figma.com/slides/al1cZp3trJXyYrV62f6xaQ/Untitled?node-id=1-44" },
    ],
  },
  {
    title: "Figma Design",
    tags: ["Design"],
    links: [
      { label: "Figma", url: "https://www.figma.com/design/G8vu9wubuJXfLmQsXzgApE/Portfolio?node-id=0-1&p=f&t=F5DtxcplMy2IwTj8-0" },
    ],
  },
]

function ProjectsSection() {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            tags={project.tags}
            links={project.links}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection