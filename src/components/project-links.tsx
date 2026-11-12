import React from "react"
import Link from "next/link"
import { ExternalLink, Github, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Project } from "@/lib/projects"

const ProjectLinks = ({ project }: { project: Project }) => (
  <div className="flex flex-wrap items-center gap-3">
    {project.liveUrl && (
      <Button variant="cta" className="h-11" asChild>
        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
          <ExternalLink className="w-4 h-4 mr-2" aria-hidden="true" />
          {project.liveLabel ?? "Live site"}
          <span className="sr-only"> for {project.name}</span>
        </Link>
      </Button>
    )}
    {project.githubUrl && (
      <Button variant="outline" className="h-11" asChild>
        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          <Github className="w-4 h-4 mr-2" aria-hidden="true" />
          Code
          <span className="sr-only"> for {project.name}</span>
        </Link>
      </Button>
    )}
    {project.access && (
      <span className="inline-flex items-center gap-2 text-sm text-gray-400">
        <Lock className="w-4 h-4" aria-hidden="true" />
        {project.access}
      </span>
    )}
  </div>
)

export default ProjectLinks
