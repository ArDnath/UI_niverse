import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import { getAllProjects } from '@/lib/projects';
import type { Project } from '@/types/types';
import ProjectDisplay from '@/components/ProjectDisplay';

export default function GetStartedPage() {
  const navigate = useNavigate();
  const { projectId } = useParams<{ projectId?: string }>();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const projects = getAllProjects();

  // Find the current selected project based on the URL param
  const selectedProject = projects.find(p => p.id === projectId) || projects[0];

  // Ensure valid route on mount or when projectId changes
  useEffect(() => {
    if (!projectId && projects.length > 0) {
      navigate(`/projects/${projects[0].id}`, { replace: true });
    } else if (projectId && !projects.some(p => p.id === projectId)) {
      navigate(`/projects/${projects[0].id}`, { replace: true });
    }
  }, [projectId, projects, navigate]);

  const handleSelectProject = (project: Project) => {
    if (project.id !== projectId) {
      navigate(`/projects/${project.id}`);
      setIsMobileOpen(false);
    }
  };

  return (
    <div className="h-full flex">
      <Sidebar 
                  projects={projects} 
                  selectedProject={selectedProject} 
                  onSelectedProject={handleSelectProject} 
                  className="border-0"
                />
      <main className="flex-1">
          <ProjectDisplay project={selectedProject} />
        </main>
    </div>
  );
}
