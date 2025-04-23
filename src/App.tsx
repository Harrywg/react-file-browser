import useFilesQuery from '@/lib/hooks/useFilesQuery';
import Header from '@/components/Header';
import { Routes, Route } from 'react-router-dom';
import DirectoryView from '@/views/DirectoryView';
import AssetView from '@/views/AssetView';

export default function App() {
   // Due to small dataset, fetching all content at top level
   const { files, isLoading } = useFilesQuery();
   return (
      <div className="mx-auto w-full max-w-2xl p-4">
         <Header />
         <main>
            {isLoading ? (
               <p className="text-gray-500">Fetching Files...</p>
            ) : (
               <Routes>
                  <Route path="/" element={<DirectoryView files={files} />} />
                  <Route path="/*" element={<DirectoryView breadcrumbs={true} files={files} />} />
                  <Route path="/asset/:name" element={<AssetView files={files} />} />
               </Routes>
            )}
         </main>
      </div>
   );
}
