import { Asset } from '@/lib/types';
import { dictFileIcon } from '@/lib/dicts';
interface AssetViewerProps {
   asset: Asset;
}

export default function AssetViewer({ asset }: AssetViewerProps) {
   return (
      <div className="bg-grey mx-auto flex aspect-[16/9] w-full max-w-sm flex-col gap-2 rounded-md p-4 text-white">
         <div className="flex items-center gap-2">
            {dictFileIcon[asset.type]} {asset.type}
         </div>
         <h3 className="text-2xl font-bold">{asset.name}</h3>
         <p>Added: {asset.added}</p>
      </div>
   );
}
