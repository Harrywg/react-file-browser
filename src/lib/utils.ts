import { Asset, Folder, FilterState } from '@/lib/types';

export const convertToSlug = (name: string) => {
    return '/' + name.toLowerCase().replace(/ /g, '-') + '/';
};

export const findCurrentFiles = (files: (Asset | Folder)[], path: string): (Asset | Folder)[] => {
    if (path === '/') return files;
    const pathSegments = path.split('/').filter(Boolean);
    const foundFolder = findFolderByPath(files, pathSegments);
    return foundFolder?.files ?? [];
};

const findFolderByPath = (files: (Asset | Folder)[], pathSegments: string[]): Folder | null => {
    const currentSegment = pathSegments[0];
    const remainingPath = pathSegments.slice(1);
    const matchingFolder = files.find(
        (file): file is Folder =>
            file.type === 'folder' &&
            convertToSlug(file.name) === `/${currentSegment}/`
    );
    if (!matchingFolder) return null;
    if (remainingPath.length === 0) return matchingFolder;
    return findFolderByPath(matchingFolder.files, remainingPath);
};

export const filterFiles = (files: (Asset | Folder)[], filterState: FilterState) => {
    const { search, type } = filterState;
    return files.filter((file) => {
        if (type !== 'all' && file.type !== type) return false;
        if (search && !file.name.toLowerCase().includes(search.toLowerCase())) return false;
        return true;
    });
};

export const sortFiles = (files: (Asset | Folder)[], sort: string) => {
    switch (sort) {
        case 'type':
            return files.sort((a, b) => {
                if (a.type === 'folder' && b.type !== 'folder') return -1;
                if (a.type !== 'folder' && b.type === 'folder') return 1;
                return a.name.localeCompare(b.name);
            });
        case 'name':
            return files.sort((a, b) => a.name.localeCompare(b.name));
        case 'added':
            return files.sort((a, b) => {
                if ('added' in a && 'added' in b) {
                    return new Date(a.added).getTime() - new Date(b.added).getTime();
                }
                return 0;
            });
        case 'added-desc':
            return files.sort((a, b) => {
                if ('added' in a && 'added' in b) {
                    return new Date(b.added).getTime() - new Date(a.added).getTime();
                }
                return 0;
            });
        default:
            return files;
    }
};