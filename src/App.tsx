import useFilesQuery from '@/lib/hooks/useFilesQuery';
import Header from '@/components/Header';
import AssetCard from '@/components/File/AssetItem';
import FolderCard from '@/components/File/FolderItem';
import { Routes, Route, Link } from 'react-router-dom';
import DirectoryView from '@/views/DirectoryView';
import AssetView from '@/views/AssetView';

export default function App() {
   // Due to lack of data, fetching all content at top level
   const { files, isLoading } = useFilesQuery();
   return (
      <div className="mx-auto w-full max-w-6xl p-4">
         <Header />
         <main>
            <p>
               isLoading: <strong>{isLoading ? 'true' : 'false'}</strong>
            </p>
            <p>
               files: <strong>{JSON.stringify(files)}</strong>
            </p>
         </main>

         <Routes>
            <Route path="/" element={<DirectoryView files={files} />} />
            <Route path="/asset/:name" element={<AssetView files={files} />} />
         </Routes>
      </div>
   );
}
