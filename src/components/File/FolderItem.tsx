import { useState } from 'react';
import { Asset, Folder } from '@/lib/types';
import { dictFileIcon } from '@/lib/dicts';
import Item from '@/components/File/Item';
import AssetItem from '@/components/File/AssetItem';

interface Props {
   folder: Folder;
}

export default function FolderItem({ folder }: Props) {
   const [isOpen, setIsOpen] = useState(false);
   return (
      <>
         <Item handleClick={() => setIsOpen(!isOpen)}>
            <p>{dictFileIcon.folder}</p>
            <h2 className="text-md font-bold">{folder.name}</h2>
            <p>{folder.files?.length ?? 0} Items</p>
         </Item>
         {isOpen && (
            <div className="ml-4">
               {folder.files?.map((file: Asset | Folder) => {
                  return file.type === 'folder' ? (
                     <FolderItem key={file.name} folder={file} />
                  ) : (
                     <AssetItem key={file.name} asset={file} />
                  );
               })}
            </div>
         )}
      </>
   );
}
