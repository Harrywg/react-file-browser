import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import useFilesQuery from '@/lib/hooks/useFilesQuery';
import { Asset, FilterState, Datasource } from '@/lib/types';
import Header from '@/components/Header';
import Filters from '@/components/Filters';
import AssetViewer from '@/components/AssetViewer';
import DirectoryView from '@/views/DirectoryView';
import DatasourceSelector from '@/components/DatasourceSelector';

export default function App() {
   const [datasource, setDatasource] = useState<Datasource>('supplied');

   // Due to small dataset, fetching all content at top level
   const { files, isLoading } = useFilesQuery(datasource);
   const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
   const [filterState, setFilterState] = useState<FilterState>({
      search: '',
      type: 'all',
      sort: 'type',
   });
   return (
      <div className="mx-auto h-screen w-full max-w-2xl bg-white p-4 sm:p-8">
         <Header />
         <main>
            <DatasourceSelector datasource={datasource} setDatasource={setDatasource} />
            <Filters
               className={isLoading ? 'pointer-events-none opacity-50' : ''}
               filterState={filterState}
               setFilterState={setFilterState}
            />
            {isLoading ? (
               <p className="pt-5 text-center text-gray-500">Fetching Files...</p>
            ) : (
               <>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                     <Routes>
                        <Route
                           path="/"
                           element={
                              <DirectoryView
                                 setSelectedAsset={setSelectedAsset}
                                 files={files}
                                 filterState={filterState}
                              />
                           }
                        />
                        <Route
                           path="/*"
                           element={
                              <DirectoryView
                                 filterState={filterState}
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
