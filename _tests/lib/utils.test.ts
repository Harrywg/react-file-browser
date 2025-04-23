import { convertToSlug, findCurrentFiles, filterFiles } from '../../src/lib/utils';
import { Asset, Folder } from '../../src/lib/types';

describe('convertToSlug', () => {
    test('should convert a simple name to a slug', () => {
        expect(convertToSlug('My Folder')).toBe('/my-folder/');
    });

    test('should convert a long name to a slug', () => {
        expect(convertToSlug('My Long Folder Name')).toBe('/my-long-folder-name/');
    });

    test('should handle special characters', () => {
        expect(convertToSlug('My-Folder!@#$%^&*()')).toBe('/my-folder!@#$%^&*()/');
    });
});

describe('findCurrentFiles', () => {
    const workFolder: Folder = {
        type: 'folder',
        name: 'Work',
        files: [
            { type: 'pdf', name: 'Report', added: '2023-01-01' },
            { type: 'doc', name: 'Notes', added: '2023-01-02' }
        ]
    };

    const personalFolder: Folder = {
        type: 'folder',
        name: 'Personal',
        files: [
            { type: 'csv', name: 'Budget', added: '2023-01-03' }
        ]
    };

    const documentsFolder: Folder = {
        type: 'folder',
        name: 'Documents',
        files: [workFolder, personalFolder]
    };

    const picturesFolder: Folder = {
        type: 'folder',
        name: 'Pictures',
        files: [
            { type: 'pdf', name: 'Photo', added: '2023-01-04' }
        ]
    };

    const sampleFiles: (Asset | Folder)[] = [documentsFolder, picturesFolder];

    test('should return root files when path is "/"', () => {
        const result = findCurrentFiles(sampleFiles, '/');
        expect(result).toEqual(sampleFiles);
    });

    test('should return files from a first-level folder', () => {
        const result = findCurrentFiles(sampleFiles, '/documents/');
        expect(result).toEqual(documentsFolder.files);
    });

    test('should return files from a nested folder', () => {
        const result = findCurrentFiles(sampleFiles, '/documents/work/');
        expect(result).toEqual(workFolder.files);
    });

    test('should return files from a deeply nested folder', () => {
        const result = findCurrentFiles(sampleFiles, '/documents/personal/');
        expect(result).toEqual(personalFolder.files);
    });

    test('should return empty array for non-existent path', () => {
        const result = findCurrentFiles(sampleFiles, '/non-existent/');
        expect(result).toEqual([]);
    });

    test('should return empty array for partially matching path', () => {
        const result = findCurrentFiles(sampleFiles, '/documents/non-existent/');
        expect(result).toEqual([]);
    });

    test('should handle paths with trailing slashes', () => {
        const result = findCurrentFiles(sampleFiles, '/documents/work////');
        expect(result).toEqual(workFolder.files);
    });

    test('should handle paths with leading slashes', () => {
        const result = findCurrentFiles(sampleFiles, '/////documents/work/');
        expect(result).toEqual(workFolder.files);
    });
});

describe('filterFiles', () => {
    const sampleFiles: (Asset | Folder)[] = [
        { type: 'pdf', name: 'Report', added: '2023-01-01' },
        { type: 'doc', name: 'Notes', added: '2023-01-02' }
    ];

    test('should filter files by type', () => {
        const result = filterFiles(sampleFiles, { search: '', type: 'pdf' });
        expect(result).toEqual([{ type: 'pdf', name: 'Report', added: '2023-01-01' }]);
    });

    test('should filter files by search', () => {
        const result = filterFiles(sampleFiles, { search: 'report', type: 'all' });
        expect(result).toEqual([{ type: 'pdf', name: 'Report', added: '2023-01-01' }]);
    });

    test('should filter files by type and search', () => {
        const result = filterFiles(sampleFiles, { search: 'report', type: 'pdf' });
        expect(result).toEqual([{ type: 'pdf', name: 'Report', added: '2023-01-01' }]);
    });
});

