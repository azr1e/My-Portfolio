import Button from "@/components/ui/Button"

function ContactSection() {
  const githubUrl = "https://github.com/azr1e"
  const emailUrl = "mailto:azrielworkbusiness@gmail.com"

  return (
    <section className="px-6 py-20 max-w-3xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-10">Have a project in mind or just want to say hi? Reach out through GitHub or email.</p>
      <div className="flex justify-center gap-6">
        <Button as="a" href={githubUrl} target="_blank" rel="noopener noreferrer" variant="secondary">GitHub</Button>
        <Button as="a" href={emailUrl} variant="primary">Email Me</Button>
      </div>
    </section>
  )
}

export default ContactSection