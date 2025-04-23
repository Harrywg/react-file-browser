import { FilterState } from '@/lib/types';

interface Props {
   filterState: FilterState;
   setFilterState: (filterState: FilterState) => void;
}

export default function Filters({ filterState, setFilterState }: Props) {
   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFilterState({ ...filterState, search: e.target.value });
   };

   const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setFilterState({ ...filterState, type: e.target.value });
   };

   const handleClear = () => {
      setFilterState({ search: '', type: 'all' });
   };

   return (
      <form className="mb-8 flex justify-center gap-2">
         <input
            type="text"
            placeholder="Search"
            className="border-grey w-full rounded border-2 p-1 px-2"
            value={filterState.search}
            onChange={handleSearchChange}
         />
         <select
            id="type"
            className="bg-grey rounded p-1 text-white"
            value={filterState.type}
            onChange={handleTypeChange}
         >
            <option value="all">All</option>
            <option value="pdf">PDF</option>
            <option value="doc">DOC</option>
            <option value="csv">CSV</option>
            <option value="folder">Folder</option>
         </select>
         <button
            onClick={handleClear}
            type="button"
            className="text-grey hover:bg-grey border-grey rounded border-2 bg-white p-1 hover:text-white"
         >
            Clear
         </button>
      </form>
   );
}
