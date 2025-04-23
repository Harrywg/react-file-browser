import { useEffect } from "react";
import { getFiles } from "@/lib/api.ts";

export default function App() {
  useEffect(() => {
    const fetchFiles = async () => {
      const files = await getFiles();
      console.log(files);
    };
    fetchFiles();
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold">Hello World</h1>
    </div>
  );
}
