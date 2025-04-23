import { Routes, Route } from 'react-router-dom';
import useFilesQuery from '@/lib/hooks/useFilesQuery';
import Header from '@/components/Header';
import DirectoryView from '@/views/DirectoryView';

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
               </Routes>
            )}
         </main>
      </div>
   );
}
