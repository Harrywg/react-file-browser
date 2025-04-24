import { getFiles } from '../../src/lib/api';
import data from '../../data.json';
import largerFiles from '../../data-larger.json';

describe('getFiles', () => {
   test('should returns the expected data', async () => {
      const files = await getFiles('supplied');
      expect(files).toEqual(data);
   });

   test('should returns the expected data', async () => {
      const files = await getFiles('larger-dataset');
      expect(files).toEqual(largerFiles);
   });
});
