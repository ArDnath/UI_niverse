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
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden p-3 z-50 relative"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-label="Toggle Sidebar"
      >
        <DynamicIcon name={isMobileOpen ? "x" : "panel-left-open"} size={30} />
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-[250px] bg-white border-r shadow-sm
          transform transition-transform duration-300 ease-in-out z-40
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
          md:static md:translate-x-0 md:h-auto md:block
          ${className ?? ""}
        `}
      >
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">Projects</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Select a project to view and interact with it
          </p>

          <ul className="space-y-1">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <li
                  key={project.id}
                  className={`cursor-pointer px-4 py-2 rounded flex items-center transition-colors
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
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={() => setIsMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Sidebar;
