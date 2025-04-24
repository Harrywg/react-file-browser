import { ElementType } from 'react';
import { Link } from 'react-router-dom';

interface Props {
   children: React.ReactNode;
   attributes?: React.HTMLAttributes<HTMLButtonElement>;
   className?: string;
   handleClick?: () => void;
   as?: 'button' | 'link';
   to?: string;
}

export default function Item({
   handleClick,
   children,
   className,
   as = 'button',
   to,
   ...attributes
}: Props) {
   const Component: ElementType = as === 'link' ? Link : 'button';
   return (
      <Component
         {...(as === 'link' ? { to } : null)}
         className={`flex items-center gap-2 ${className}`}
         onClick={handleClick}
         {...attributes}
      >
         {children}
      </Component>
   );
}
