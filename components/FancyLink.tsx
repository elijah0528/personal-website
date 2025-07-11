import React from 'react';

type FancyLinkProps = React.PropsWithChildren<{
  href: string;
  className?: string;
}>;

export default function FancyLink({
  href,
  children,
  className = "",
}: FancyLinkProps) {
  return (
    <a
      href={href}
      className={`
      relative transition-all duration-300 ease-in-out hover:translate-x-0.5 hover:text-accent-foreground
      after:content-[''] after:absolute after:w-0 after:h-px after:-bottom-0.5 after:left-0 
      after:bg-current after:transition-all after:duration-300 after:ease-in-out hover:after:w-full
      ${className}
    `}
    >
      {children}
    </a>
  );
}
