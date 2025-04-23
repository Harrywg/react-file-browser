import { Link } from 'react-router-dom';

interface BreadcrumbsProps {
   path: string;
}

export default function Breadcrumbs({ path }: BreadcrumbsProps) {
   const pathSegments = ['home', ...path.split('/').filter(Boolean)];
   let cumulativePath = '';
   return (
      <ul className="mb-4 flex">
         {pathSegments.map((segment) => {
            cumulativePath += `${segment === 'home' ? '/' : `${segment}/`}`;
            return (
               <li className="after:mx-2 after:content-['→'] last:after:hidden" key={segment}>
                  <Link className="capitalize hover:underline" to={cumulativePath}>
                     {segment}
                  </Link>
               </li>
            );
         })}
      </ul>
   );
}
