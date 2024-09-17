import { Linkedin, AtSign, GitBranch } from "lucide-react"

export function Bio() {
  return (
    <section className="bg-white text-center md:text-left rounded-xl p-2 md:p-5 shadow-md">
      <img className="h-32 w-32 rounded-full mx-auto md:mx-0" src="/profile-pic.png" alt="profile picture" />
      <h1 className="text-lg md:text-2xl font-bold mt-3">Dev Webdecoded</h1>
      <p className="text-secondary-foreground py-2">I'm a Senior Full-Stack Engineer.</p>

      <div className="flex flex-row justify-center md:justify-start gap-2 mt-2">
        <a href="https://www.linkedin.com/in/rafael-isid%C3%B3rio-aa48b1230/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="text-blue-400 hover:text-blue-500" />
        </a>
        <a href="mailto:rafaelrocha2500@gmail.com" target="_blank" rel="noopener noreferrer">
          <AtSign className="text-pink-400 hover:text-pink-500" />
        </a>
        <a href="https://github.com/henriquerocharafael" target="_blank" rel="noopener noreferrer">
          <GitBranch className="text-red-400 hover:text-red-500" />
        </a>
      </div>
    </section>
  )
}