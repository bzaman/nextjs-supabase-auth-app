import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface IconProps {
  size?: number;
  title?: string;
  className?: string;
  style?: React.CSSProperties;
  ariaHidden?: boolean;
  strokeWidth?: number;
}

const IconUser = forwardRef<SVGSVGElement, IconProps>(
  (
    {
      size = 20,
      style,
      title,
      className,
      ariaHidden = false,
      strokeWidth = 2,
      ...props
    },
    ref,
  ) => (
    <svg
      ref={ref}
      // xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("pointer-events-none", className)}
      style={
        {
          "--size": `calc(1px * ${size})`,
          "--vw": "24px",
          "--vh": "24px",
          width: "var(--size)",
          height: "calc((var(--vh) / var(--vw)) * var(--size))",
          ...style,
        } as React.CSSProperties
      }
      {...(ariaHidden && { "aria-hidden": ariaHidden })}
      {...props}
    >
      {title && <title>{title}</title>}
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
);

IconUser.displayName = "IconUser";
export default IconUser;
