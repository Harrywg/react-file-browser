import useFilesQuery from "@/lib/hooks/useFilesQuery";
import { dictFileIcon } from "@/lib/dicts";

export default function App() {
  const { files, isLoading } = useFilesQuery();
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">File Browser</h1>
      <p>
        isLoading: <strong>{isLoading ? "true" : "false"}</strong>
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
