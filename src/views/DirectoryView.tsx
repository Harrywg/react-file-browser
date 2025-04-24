import { useLocation } from 'react-router-dom';
import { Asset, Folder, FilterState } from '@/lib/types';
import { filterFiles, findCurrentFiles, sortFiles } from '@/lib/utils';
import Breadcrumbs from '@/components/Breadcrumbs';
import AssetItem from '@/components/File/AssetItem';
import BackItem from '@/components/File/BackItem';
import FolderItem from '@/components/File/FolderItem';

interface DirectoryViewProps {
   files: (Asset | Folder)[];
   setSelectedAsset: (asset: Asset) => void;
   breadcrumbs?: boolean;
   filterState: FilterState;
}

export default function DirectoryView({
   files,
   breadcrumbs = false,
   setSelectedAsset,
   filterState,
}: DirectoryViewProps) {
   const location = useLocation();

   const pathSegments = location.pathname.split('/').filter(Boolean);
   const backLocation = pathSegments.length > 0 ? `/${pathSegments.slice(0, -1).join('/')}` : '/';

   const currentFiles = findCurrentFiles(files, location.pathname);
   const filteredFiles = filterFiles(currentFiles, filterState);
   const sortedFiles = sortFiles(filteredFiles, filterState.sort);

   return (
      <div>
         {breadcrumbs && <Breadcrumbs path={location.pathname} />}
         <ul className="flex flex-col gap-2">
            {breadcrumbs && <BackItem to={backLocation} />}
            {sortedFiles.map((file) => {
               return (
                  <li key={file.name}>
                     {file.type === 'folder' ? (
                        <FolderItem key={file.name} folder={file} />
                     ) : (
                        <AssetItem
                           key={file.name}
                           asset={file}
                           setSelectedAsset={setSelectedAsset}
                        />
                     )}
                  </li>
               );
            })}
         </ul>
      </div>
   );
}
