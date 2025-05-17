import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GridBackgroundProps {
  children: ReactNode;
}

export function GridBackground({ children }: GridBackgroundProps) {
  return (
    <div className="relative flex h-auto min-h-[50rem] w-full items-center justify-center bg-white dark:bg-black overflow-hidden">
      {/* Grid pattern background */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Children go here on top */}
      <div className="relative z-20 w-full">
        {children}
      </div>
    </div>
  );
}
