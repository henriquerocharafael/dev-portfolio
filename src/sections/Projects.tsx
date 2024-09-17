import { ProjectCard } from '../components/ProjectCard'

const projects = [
  {
    name: 'Quiz AI Generator',
    description: 'study faster, upload your content and let AI quiz you',
    url: 'https://quizz-ai-tutorial.vercel.app/',
    imgUrl: 'https://i.pinimg.com/236x/94/c6/25/94c62511d312b8612aa0ab92318966f2.jpg',
  },
  {
    name: 'AI Form Generator',
    description: 'Generate, publish and share your form right away with AI. Dive into insightful results, charts and analytics.',
    url: 'https://quizz-ai-tutorial.vercel.app/',
    imgUrl: 'https://i.pinimg.com/236x/1c/39/25/1c3925159fd5abe17259fd7fbe5a8abe.jpg',
  },
  {
    name: 'DevForm',
    description: 'Create a form, grab our endpoints and add it in your code. No need to worry about the backend.',
    url: 'https://quizz-ai-tutorial.vercel.app/',
    imgUrl: 'https://i.pinimg.com/236x/1c/39/25/1c3925159fd5abe17259fd7fbe5a8abe.jpg',
  },
  {
    name: 'Tech Blog',
    description: 'A full-stack blog application built with Next.js, featuring user authentication and CRUD operations.',
    url: 'https://quizz-ai-tutorial.vercel.app/',
    imgUrl: 'https://i.pinimg.com/236x/94/c6/25/94c62511d312b8612aa0ab92318966f2.jpg',
  },
]

export function Projects() {
  return (
    <>
      <h1 className="text-4xl text-left font-bold mb-2">Recent Projects</h1>
      <ul className="bg-white text-left rounded-xl p-4">
        {projects.map((project, index) => (
          <li key={index}>
            <ProjectCard
              name={project.name}
              description={project.description}
              url={project.url}
              imgUrl={project.imgUrl}
            />
          </li>
        ))}
      </ul>
    </>
  )
}