import { Asset } from '@/lib/types';
import { dictFileIcon } from '@/lib/dicts';
import Item from '@/components/File/Item';

interface Props {
   asset: Asset;
   setSelectedAsset: (asset: Asset) => void;
}

export default function AssetItem({ asset, setSelectedAsset }: Props) {
   return (
      <Item className="group cursor-pointer" handleClick={() => setSelectedAsset(asset)}>
         <p>{dictFileIcon[asset.type]}</p>
         <h2 className="text-md group-hover:underline">{asset.name}</h2>
      </Item>
   );
}
