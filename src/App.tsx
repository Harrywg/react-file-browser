import useFilesQuery from '@/lib/hooks/useFilesQuery';
import { dictFileIcon } from '@/lib/dicts';
import Header from '@/components/Header';

export default function App() {
   const { files, isLoading } = useFilesQuery();
   return (
      <div className="grid h-full w-full">
         <Header />
         <p>
            isLoading: <strong>{isLoading ? 'true' : 'false'}</strong>
         </p>
         <p>
            files: <strong>{JSON.stringify(files)}</strong>
         </p>
         {files.map((file) => (
            <div key={file.name}>
               <p>{file.name}</p>
               <p>{file.type}</p>
               <p>{dictFileIcon[file.type]}</p>
            </div>
         ))}
      </div>
   );
}
