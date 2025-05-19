import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/Card";
  
  import type { Project } from "@/types/types";
  
  interface ProjectDisplayProps {
    project: Project | null;
  }
  
  const ProjectDisplay = ({ project }: ProjectDisplayProps) => {
    if (!project) {
      return (
        <div className="h-full flex items-center justify-center">
          <p className="text-muted-foreground text-center text-lg">
            Select a project to Get Started
          </p>
        </div>
      );
    }
  
    return (
      <div className="container py-8 px-4 max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <project.icon className="h-6 w-6" />
            {project.name}
          </h1>
          <p className="text-muted-foreground">{project.description}</p>
        </div>
  
        {/* Concepts Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What you'll learn</CardTitle>
            <CardDescription>
              Key concepts covered in this project
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-wrap gap-2">
              {project.concepts.map((concept, index) => (
                <li
                  key={index}
                  className="px-3 py-1 rounded-full bg-black text-white text-sm whitespace-nowrap"
                >
                  {concept}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
  
        {/* Live Preview / Terminal Style Component Area */}
        <div className="rounded-lg border overflow-hidden">
          <div className="bg-muted px-4 py-2 border-b">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
              <div className="ml-2 text-xs text-muted-foreground truncate">
                {project.name}
              </div>
            </div>
          </div>
          <div className="p-4 bg-card">{project.component}</div>
        </div>
      </div>
    );
  };
  
  export default ProjectDisplay;
  