import { useState } from "react";
import { DynamicIcon } from "lucide-react/dynamic";
import type { Project } from "@/types/types";

interface SidebarProps {
  projects: Project[];
  selectedProject: Project | null;
  onSelectedProject: (project: Project) => void;
  className?: string;
}

const Sidebar = ({
  projects,
  selectedProject,
  onSelectedProject,
  className,
}: SidebarProps) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden p-2"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-label="Toggle Sidebar"
      >
        {isMobileOpen ? "Close" : <DynamicIcon name="panel-left-open" size={30} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-1/5 border-r bg-white
          transform md:translate-x-0
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-300 ease-in-out
          md:static md:translate-x-0
          ${className ?? ""}
        `}
      >
        <h2 className="text-lg font-semibold mb-2">Projects</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Select a project to view and interact with it
        </p>

        <ul>
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <li
                key={project.id}
                className={`cursor-pointer px-4 py-2 border-b flex items-center
                ${
                  selectedProject?.id === project.id
                    ? "bg-blue-500 text-white font-semibold"
                    : "hover:bg-blue-100"
                }
              `}
                onClick={() => {
                  onSelectedProject(project);
                  setIsMobileOpen(false); // Close sidebar on mobile after selection
                }}
              >
                <Icon className="mr-2 h-4 w-4" />
                {project.name}
              </li>
            );
          })}
        </ul>
      </aside>

      {/* Overlay for mobile when sidebar is open */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 md:hidden"
          onClick={() => setIsMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Sidebar;
