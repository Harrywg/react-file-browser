import { Asset, Folder } from '@/lib/types';

export const convertToSlug = (name: string) => {
    return '/' + name.toLowerCase().replace(/ /g, '-') + '/';
};

export const filterCurrentFiles = (files: (Asset | Folder)[], path: string): (Asset | Folder)[] => {
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

