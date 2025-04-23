import { useState } from 'react';
import { Folder } from '@/lib/types';
import { dictFileIcon } from '@/lib/dicts';
import { convertToSlug } from '@/lib/utils';
import Item from '@/components/File/Item';
interface Props {
   folder: Folder;
}

export default function FolderItem({ folder }: Props) {
   const slug = convertToSlug(folder.name);
   return (
      <Item as="link" to={slug}>
         <p>{dictFileIcon.folder}</p>
         <h2 className="text-md font-bold">{folder.name}</h2>
         <small>{folder.files?.length ?? 0} Items</small>
      </Item>
   );
}
