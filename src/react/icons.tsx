import React from "react";
import { iconPaths } from "../shared/icon-paths";

export { iconPaths };

export function remixClassToIconName(className: string): string {
  const m = className.match(/\bri-([a-z0-9-]+)/);
  if (!m) return className.trim();
  const parts = m[1].split("-");
  return (
    parts[0] +
    parts
      .slice(1)
      .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
      .join("")
  );
}

export function BjSvgIcon({
  name,
  ...props
}: { name: string } & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d={iconPaths[name]} />
    </svg>
  );
}
