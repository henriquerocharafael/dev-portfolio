import { ChevronRight } from "lucide-react"

interface ProjectCardProps {
  name: string
  description: string
  url: string
  imgUrl: string
}

export function ProjectCard({ name, description, url, imgUrl }: ProjectCardProps) {
  return (
    <a href={url} target='_blank' className='flex items-center border-b py-8 px-2 rounded-md gap-4 group/item hover:bg-slate-100 mt-1'>
      <img
        src={imgUrl}
        alt={name}
        height='50'
        width='50'
        className='object-contain'
      />
      <div className="flex flex-col flex-grow">
        <p className='group-hover/item:text-primary text-xl font-semibold'>{name}</p>
        <p className="text-secondary-foreground">{description}</p>
      </div>
      <div>
        <ChevronRight />
      </div>
    </a>
  )
}