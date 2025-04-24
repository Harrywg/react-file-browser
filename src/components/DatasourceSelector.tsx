import { Datasource } from '@/lib/types';
import { useNavigate } from 'react-router-dom';

interface Props {
   datasource: Datasource;
   setDatasource: (datasource: Datasource) => void;
   setSelectedAsset: (asset: null) => void;
}

export default function DatasourceSelector({ datasource, setDatasource, setSelectedAsset }: Props) {
   const navigate = useNavigate();

   const updateDatasource = (datasource: Datasource) => {
      navigate('/');
      setDatasource(datasource);
      setSelectedAsset(null);
   };

   return (
      <form className="flex items-center justify-center gap-2 px-2 pb-4">
         <strong>Datasource:</strong>
         <select
            name="datasource"
            id="datasource"
            className="rounded bg-blue-700 p-1 text-white"
            onChange={(e) => updateDatasource(e.target.value as Datasource)}
            value={datasource}
         >
            <option value="supplied">Supplied</option>
            <option value="larger-dataset">Extended</option>
         </select>
      </form>
   );
}
