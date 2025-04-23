import { Asset, Folder } from '@/lib/types';

interface AssetViewProps {
   files: (Asset | Folder)[];
}

export default function AssetView({ files }: AssetViewProps) {
   return <div>AssetView</div>;
}
