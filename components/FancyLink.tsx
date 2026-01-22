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
      after:content-[''] after:absolute after:h-px after:-bottom-0.5 after:left-0 
      after:bg-current after:transition-all after:duration-300 after:ease-in-out
      after:w-full after:opacity-30 md:after:w-0 md:after:opacity-100 hover:after:w-full hover:after:opacity-100
      ${className}
    `}
    >
      {children}
    </a>
  );
}
