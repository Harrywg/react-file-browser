import { FilterState } from '@/lib/types';

interface Props {
   filterState: FilterState;
   setFilterState: (filterState: FilterState) => void;
   className?: string;
}

export default function Filters({ filterState, setFilterState, className }: Props) {
   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFilterState({ ...filterState, search: e.target.value });
   };

   const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setFilterState({ ...filterState, type: e.target.value });
   };

   const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setFilterState({ ...filterState, sort: e.target.value });
   };

   const handleClear = () => {
      setFilterState({ search: '', type: 'all', sort: 'type' });
   };

   return (
      <form className={`mb-8 flex justify-center gap-2 max-sm:flex-wrap ${className}`}>
         <input
            type="text"
            placeholder="Search this folder"
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
         <select
            id="sort"
            className="bg-grey rounded p-1 text-white"
            value={filterState.sort}
            onChange={handleSortChange}
         >
            <option value="type">Type A-Z</option>
            <option value="name">Name A-Z</option>
            <option value="added">Date (ASC)</option>
            <option value="added-desc">Date (DESC)</option>
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
