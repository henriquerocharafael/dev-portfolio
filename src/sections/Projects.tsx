import { useEffect, useState } from 'react'
import { ProjectCard } from '../components/ProjectCard'
import { ProjectCardProps } from '../components/ProjectCard'

export function Projects() {
  const [repositories, setRepositories] = useState<ProjectCardProps[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/henriquerocharafael/repos')
      .then(response => response.json())
      .then(data => {
        setRepositories(data)
        console.log(data)
      })
  }, [])

  return (
    <>
      <h1 className="text-4xl text-left font-bold mb-2">Recent Projects</h1>
      <ul className="bg-white text-left rounded-xl p-4">
        {repositories.map((repo, index) => (
          <li key={index}>
            <ProjectCard
              name={repo.name}
              description={repo.description}
              html_url={repo.html_url}
            />
          </li>
        ))}
      </ul>
    </>
  )
}
