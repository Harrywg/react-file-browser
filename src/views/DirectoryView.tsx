import Breadcrumbs from '@/components/Breadcrumbs';
import AssetItem from '@/components/File/AssetItem';
import BackItem from '@/components/File/BackItem';
import FolderItem from '@/components/File/FolderItem';
import { Asset, Folder } from '@/lib/types';
import { filterCurrentFiles } from '@/lib/utils';
import { useLocation } from 'react-router-dom';

interface DirectoryViewProps {
   files: (Asset | Folder)[];
   breadcrumbs?: boolean;
}

export default function DirectoryView({ files, breadcrumbs = false }: DirectoryViewProps) {
   const location = useLocation();

   const pathSegments = location.pathname.split('/').filter(Boolean);
   const backLocation = pathSegments.length > 0 ? `/${pathSegments.slice(0, -1).join('/')}` : '/';

   const currentFiles = filterCurrentFiles(files, location.pathname);
   return (
      <>
         {breadcrumbs && <Breadcrumbs path={location.pathname} />}
         <ul className="flex flex-col gap-2">
            {breadcrumbs && <BackItem to={backLocation} />}
            {currentFiles.map((file) => {
               return (
                  <li key={file.name}>
                     {file.type === 'folder' ? (
                        <FolderItem key={file.name} folder={file} />
                     ) : (
                        <AssetItem key={file.name} asset={file} />
                     )}
                  </li>
               );
            })}
         </ul>
      </>
   );
}
