import Button from "@/components/ui/Button"

function ContactCTASection() {
  const githubUrl = "https://github.com/azr1e"
  const emailUrl = "mailto:azrielworkbusiness@gmail.com"

  return (
    <section className="px-6 py-16 max-w-6xl mx-auto text-center border-t border-gray-200 dark:border-gray-800">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">Feel free to reach out through GitHub or email.</p>
      <div className="flex justify-center gap-6">
        <Button as="a" href={githubUrl} target="_blank" rel="noopener noreferrer" variant="secondary">GitHub</Button>
        <Button as="a" href={emailUrl} variant="primary">Email Me</Button>
      </div>
    </section>
  )
}

export default ContactCTASection