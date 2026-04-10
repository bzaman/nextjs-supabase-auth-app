import type { ElementType, ComponentPropsWithoutRef } from "react";

// T extends ElementType makes this a polymorphic component.
// The generic T captures whichever element is passed via `as` (e.g. 'p', 'h1', 'a'),
// so ComponentPropsWithoutRef<T> resolves to that element's exact HTML props.
// This gives full type safety — e.g. `href` is only valid when as="a",
// and TypeScript will catch invalid props at compile time.

type FluidTextProps<T extends ElementType> = {
  as?: T;
  minFontSize?: number;
  maxFontSize?: number;
  viewportWidth?: number; // defaults to 1440
} & ComponentPropsWithoutRef<T>;

export default function FluidText<T extends ElementType = "p">({
  as,
  minFontSize,
  maxFontSize,
  viewportWidth = 1280,
  style,
  className,
  children,
  ...props
}: FluidTextProps<T>) {
  // IMPORTANT: cast to ElementType so TypeScript accepts Tag as a valid JSX element,
  // since it can't narrow T | "p" to a concrete element type on its own
  const Tag = (as ?? "p") as ElementType;

  let resolvedStyle = style;
  if (minFontSize !== undefined && maxFontSize !== undefined) {
    const fluidSize = `clamp(${minFontSize}px, calc(1vw * (${maxFontSize} * 100 / ${viewportWidth})), ${maxFontSize}px)`;
    // IMPORTANT: fluid fontSize is spread last so it always wins over any fontSize in style
    resolvedStyle = { ...style, fontSize: fluidSize };
  }

  const resolvedClassName = ["fluid-text", className].filter(Boolean).join(" ");

  return (
    <Tag style={resolvedStyle} className={resolvedClassName} {...props}>
      {children}
    </Tag>
  );
}
