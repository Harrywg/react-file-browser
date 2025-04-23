import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import useFilesQuery from '@/lib/hooks/useFilesQuery';
import Header from '@/components/Header';
import DirectoryView from '@/views/DirectoryView';
import AssetViewer from './components/AssetViewer';
import { Asset } from '@/lib/types';

export default function App() {
   // Due to small dataset, fetching all content at top level
   const { files, isLoading } = useFilesQuery();
   const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);

   return (
      <div className="mx-auto w-full max-w-2xl p-4">
         <Header />
         <main>
            {isLoading ? (
               <p className="pt-5 text-center text-gray-500">Fetching Files...</p>
            ) : (
               <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Routes>
                     <Route
                        path="/"
                        element={
                           <DirectoryView setSelectedAsset={setSelectedAsset} files={files} />
                        }
                     />
                     <Route
                        path="/*"
                        element={
                           <DirectoryView
                              setSelectedAsset={setSelectedAsset}
                              breadcrumbs={true}
                              files={files}
                           />
                        }
                     />
                  </Routes>
                  {!!selectedAsset && <AssetViewer asset={selectedAsset} />}
               </div>
            )}
         </main>
      </div>
   );
}
