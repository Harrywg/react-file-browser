import { Asset, Folder } from './types';
import files from '../../data.json';

export const getFiles = (): Promise<(Asset | Folder)[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(files as (Asset | Folder)[]);
        }, 500);
    });
};
