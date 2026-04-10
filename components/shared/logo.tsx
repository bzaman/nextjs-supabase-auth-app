import Link from "next/link";
import { cn } from "@/lib/utils";
import LogoSvg from "@/components/shared/logo-svg";

type LogoProps = {
  href: string;
  size?: number;
  title?: string;
  fill?: string;
  svgStyle?: React.CSSProperties;
  className?: string;
};

export default function Logo({
  href,
  size,
  title,
  fill,
  svgStyle,
  className,
  ...props
}: LogoProps) {
  return (
    <Link
      href={href}
      className={cn("inline-block no-underline", className)}
      {...props}
    >
      <LogoSvg size={size} fill={fill} style={svgStyle} title={title} />
    </Link>
  );
}
