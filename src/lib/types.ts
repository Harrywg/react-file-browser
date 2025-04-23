export interface File {
   type: 'doc' | 'csv' | 'pdf';
   name: string;
   added: string;
}

export interface Folder {
   type: 'folder';
   name: string;
   files: File[];
}
