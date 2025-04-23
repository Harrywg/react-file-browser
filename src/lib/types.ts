export interface Asset {
   type: 'doc' | 'csv' | 'pdf';
   name: string;
   added: string;
}

export interface Folder {
   type: 'folder';
   name: string;
   files: (Asset | Folder)[];
}

export interface FilterState {
   search: string;
   type: string;
}