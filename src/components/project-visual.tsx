import React from "react"
import Image from "next/image"
import type { Project } from "@/lib/projects"

interface ProjectVisualProps {
  project: Project
  priority?: boolean
  sizes: string
}

const ProjectVisual = ({ project, priority = false, sizes }: ProjectVisualProps) => {
  const { visual } = project

  if (visual.type === "image") {
    return (
      <div className="aspect-video overflow-hidden rounded-lg border border-gray-700 bg-gray-950">
        <Image
          src={visual.src}
          alt={`${project.name} screenshot`}
          width={1280}
          height={720}
          priority={priority}
          sizes={sizes}
          className="w-full h-full object-cover object-top"
        />
      </div>
    )
  }

  return (
    <div
      className="aspect-video overflow-hidden rounded-lg border border-gray-700 bg-gray-950 flex flex-col"
      role="img"
      aria-label={`${project.name}: ${visual.title}`}
    >
      <div className="flex items-center gap-2 border-b border-gray-800 px-4 py-2">
        <span className="w-2.5 h-2.5 rounded-full bg-gray-700" />
        <span className="w-2.5 h-2.5 rounded-full bg-gray-700" />
        <span className="w-2.5 h-2.5 rounded-full bg-gray-700" />
        <span className="ml-2 truncate font-mono text-xs text-gray-400">{visual.title}</span>
      </div>
      <pre className="flex-1 overflow-hidden px-4 py-3 font-mono text-[11px] leading-relaxed text-indigo-200 sm:text-sm">
        {visual.lines.join("\n")}
      </pre>
    </div>
  )
}

export default ProjectVisual
