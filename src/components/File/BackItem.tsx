import { dictFileIcon } from '@/lib/dicts';
import Item from '@/components/File/Item';
interface Props {
   to: string;
}

export default function FolderItem({ to }: Props) {
   return (
      <Item as="link" to={to}>
         <p>{dictFileIcon.folder}</p>
         <h2 className="text-md font-bold">..</h2>
      </Item>
   );
}
