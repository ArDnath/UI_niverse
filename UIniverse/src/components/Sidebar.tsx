import { useState, useEffect } from "react";
import { PanelLeft, X } from "lucide-react";
import { cn } from "@/lib/utils";
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
  const [isMounted, setIsMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    if (!isMobileOpen) return;
    
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileOpen && !target.closest('aside') && !target.closest('button')) {
        setIsMobileOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside, true);
    return () => document.removeEventListener('click', handleClickOutside, true);
  }, [isMobileOpen]);

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    if (!isMounted) return;
    
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileOpen, isMounted]);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className={cn(
          "md:hidden  fixed top-20 left-4 z-50 p-2 rounded-md",
          "bg-white shadow-md hover:bg-gray-100 transition-colors",
          isMobileOpen ? 'opacity-0' : 'opacity-100',
          'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
          'transform transition-all duration-200 ease-in-out',
          'flex items-center justify-center w-10 h-10',
          'border border-gray-200'
        )}
        onClick={(e) => {
          e.stopPropagation();
          setIsMobileOpen(true);
        }}
        aria-label="Open menu"
      > 
        <PanelLeft className="h-5 w-5 text-gray-700" />
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full w-[280px] bg-white border-r shadow-lg",
          "transform transition-all duration-300 ease-in-out z-40",
          isMobileOpen ? "translate-x-0" : "-translate-x-full",
          "md:static md:translate-x-0 md:h-[calc(100vh-4rem)] md:top-16 md:border-t md:border-t-gray-100",
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button for mobile */}
        <button
          className="md:hidden absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100"
          onClick={() => setIsMobileOpen(false)}
          aria-label="Close menu"
        >
          <X className="h-5 w-5 text-gray-500" />
        </button>
        <div className="p-4 pt-16 md:pt-6 overflow-y-auto h-full">
          <h2 className="text-xl font-bold mb-3 text-gray-800">Projects</h2>
          <p className="text-sm text-gray-500 mb-6">
            Select a project to view and interact with it
          </p>

          <nav>
            <ul className="space-y-2">
              {projects.map((project) => {
                const Icon = project.icon;
                const isSelected = selectedProject?.id === project.id;
                
                return (
                  <li key={project.id}>
                    <button
                      className={cn(
                        "w-full text-left px-4 py-3 rounded-lg flex items-center transition-all",
                        "focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2",
                        isSelected
                          ? "bg-blue-100 text-blue-700 font-medium"
                          : "hover:bg-gray-100 text-gray-700"
                      )}
                      onClick={() => {
                        onSelectedProject(project);
                        setIsMobileOpen(false);
                      }}
                    >
                      <Icon className={cn(
                        "mr-3 h-5 w-5 flex-shrink-0",
                        isSelected ? "text-blue-600" : "text-gray-500"
                      )} />
                      <span className="truncate">{project.name}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Overlay for mobile */}
      <div
        className={cn(
          "fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300",
          isMobileOpen ? "opacity-100 md:opacity-0" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMobileOpen(false)}
        aria-hidden="true"
      />
    </>
  );
};

export default Sidebar;
