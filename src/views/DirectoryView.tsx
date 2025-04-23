import AssetCard from '@/components/File/AssetItem';
import FolderCard from '@/components/File/FolderItem';
import { Asset, Folder } from '@/lib/types';

interface DirectoryViewProps {
   files: (Asset | Folder)[];
}

export default function DirectoryView({ files }: DirectoryViewProps) {
   return (
      <div className="">
         {files.map((file) =>
            file.type === 'folder' ? (
               <FolderCard key={file.name} folder={file} />
            ) : (
               <AssetCard key={file.name} asset={file} />
            )
         )}
      </div>
   );
}
