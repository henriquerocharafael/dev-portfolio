interface TagProps {
  name: string
}

export function Tag({ name }: TagProps) {
  return (
    <span className="rounded-full bg-background p-2 my-2">{name}</span>
  )
}