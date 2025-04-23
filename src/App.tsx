import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import useFilesQuery from '@/lib/hooks/useFilesQuery';
import { Asset, FilterState } from '@/lib/types';
import Header from '@/components/Header';
import Filters from '@/components/Filters';
import AssetViewer from '@/components/AssetViewer';
import DirectoryView from '@/views/DirectoryView';

export default function App() {
   // Due to small dataset, fetching all content at top level
   const { files, isLoading } = useFilesQuery();
   const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
   const [filterState, setFilterState] = useState<FilterState>({
      search: '',
      type: 'all',
   });
   console.log(filterState);
   return (
      <div className="mx-auto h-screen w-full max-w-2xl bg-white p-4 md:p-8">
         <Header />
         <main>
            {isLoading ? (
               <p className="pt-5 text-center text-gray-500">Fetching Files...</p>
            ) : (
               <>
                  <Filters filterState={filterState} setFilterState={setFilterState} />
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
               </>
            )}
         </main>
      </div>
   );
}
