import { Asset, Folder, Datasource } from './types';
import files from '../../data.json';
import largerFiles from '../../data-larger.json';

export const getFiles = (datasource: Datasource): Promise<(Asset | Folder)[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (datasource === 'supplied') {
                resolve(files as (Asset | Folder)[]);
            } else {
                resolve(largerFiles as (Asset | Folder)[]);
            }
        }, 500);
    });
};
