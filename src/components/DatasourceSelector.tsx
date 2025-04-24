import { Datasource } from '@/lib/types';
import { useNavigate } from 'react-router-dom';

interface Props {
   datasource: Datasource;
   setDatasource: (datasource: Datasource) => void;
}

export default function DatasourceSelector({ datasource, setDatasource }: Props) {
   const navigate = useNavigate();

   const updateDatasource = (datasource: Datasource) => {
      navigate('/');
      setDatasource(datasource);
   };

   return (
      <form className="flex items-center justify-center gap-4 px-2 pb-2">
         <strong>Datasource:</strong>
         <div className="flex items-center justify-center gap-2">
            <label htmlFor="supplied">
               <span>Supplied</span>
               <input
                  className="ml-1"
                  type="checkbox"
                  id="supplied"
                  checked={datasource === 'supplied'}
                  onChange={() => updateDatasource('supplied')}
               />
            </label>
            <label htmlFor="larger-dataset">
               <span>Larger Dataset</span>
               <input
                  className="ml-2"
                  type="checkbox"
                  id="larger-dataset"
                  checked={datasource === 'larger-dataset'}
                  onChange={() => updateDatasource('larger-dataset')}
               />
            </label>
         </div>
      </form>
   );
}
