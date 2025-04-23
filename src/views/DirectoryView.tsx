import AssetCard from '@/components/File/AssetItem';
import FolderCard from '@/components/File/FolderItem';
import { Asset, Folder } from '@/lib/types';
import { useParams, useLocation } from 'react-router-dom';

interface DirectoryViewProps {
   files: (Asset | Folder)[];
   breadcrumbs?: boolean;
}

export default function DirectoryView({ files, breadcrumbs = false }: DirectoryViewProps) {
   const location = useLocation();
   const pathSegments = location.pathname.split('/').filter(Boolean);

   // Filter files based on the current path
   const currentFiles = files.filter((file) => {
      if (pathSegments.length === 0) return true;
      // TODO: Implement proper file filtering based on the current path
      return true;
   });

   return (
      <div className="">
         {currentFiles.map((file) =>
            file.type === 'folder' ? (
               <FolderCard key={file.name} folder={file} />
            ) : (
               <AssetCard key={file.name} asset={file} />
            )
         )}
      </div>
   );
}
