import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAllProjects } from "@/lib/projects";
import type { Project } from "@/types/types";
import Sidebar from "@/components/Sidebar";

export default function GetStartedPage() {
  const navigate = useNavigate();
  const { projectId } = useParams<{ projectId?: string }>();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const projects = getAllProjects();

  const [selectedProject, setSelectedProject] = useState<Project | null>(
    projectId 
      ? projects.find(p => p.id === projectId) || projects[0]
      : projects[0]
  );

  useEffect(() => {
    if (projectId) {
      const project = projects.find(p => p.id === projectId);
      if (project) {
        setSelectedProject(project);
      } else {
        navigate(`/projects/${projects[0].id}`);
      }
    } else if (projects.length > 0) {
      navigate(`/projects/${projects[0].id}`);
    }
  }, [projectId, projects, navigate]);

  const handleSelectProject = (project: Project) => {
    if (selectedProject?.id !== project.id) {
      setSelectedProject(project);
      navigate(`/projects/${project.id}`);
      setIsMobileOpen(false);
    }
  };

  return (
    <div className=" ">
      Get Started Page
    </div>
  );
}
