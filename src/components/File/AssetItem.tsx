import { Asset } from '@/lib/types';
import { dictFileIcon } from '@/lib/dicts';
import Item from '@/components/File/Item';

interface Props {
   asset: Asset;
}

export default function AssetItem({ asset }: Props) {
   return (
      <Item className="group cursor-pointer" handleClick={() => {}}>
         <p>{dictFileIcon[asset.type]}</p>
         <h2 className="text-md font-bold group-hover:underline">{asset.name}</h2>
      </Item>
   );
}
