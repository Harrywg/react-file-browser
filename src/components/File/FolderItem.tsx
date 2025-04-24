import { Folder } from '@/lib/types';
import { dictFileIcon } from '@/lib/dicts';
import { convertToSlug } from '@/lib/utils';
import Item from '@/components/File/Item';
import { useLocation } from 'react-router-dom';
interface Props {
   folder: Folder;
}

export default function FolderItem({ folder }: Props) {
   const location = useLocation();
   const slug = convertToSlug(folder.name, location.pathname);
   return (
      <Item className="group" as="link" to={slug}>
         <p>{dictFileIcon.folder}</p>
         <h2 className="text-md font-bold group-hover:underline">{folder.name}</h2>
         <small>{folder.files?.length ?? 0} Items</small>
      </Item>
   );
}
