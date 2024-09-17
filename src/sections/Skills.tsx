import { Tag } from "../components/Tag"

const skills = [
  "JavaScript (ES6+)",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "SQL",
  "HTML & CSS",
  "Git & GitHub",
  "RESTfull APIs",
  "Test-Driven Development (TDD)",
  "Agile/Scrum",
]

export function Skills() {
  return (
    <section className="bg-white text-left rounded-xl p-2 md:p-5 shadow-md mt-6">
      <h2 className="text-lg md:text-2xl text-secondary-foreground mb-3 font-semibold text-center md:text-left">Skills</h2>
      <ul className="flex flex-wrap leading-10">
        {skills.map((skill, index) => (
          <li className="mr-2" key={index}>
            <Tag name={skill} />
          </li>
        ))}
      </ul>
    </section>
  )
}