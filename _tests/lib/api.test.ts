import { getFiles } from '../../src/lib/api';
import data from '../../data.json';

describe('getFiles', () => {
   test('should returns the expected data', async () => {
      const files = await getFiles();
      expect(files).toEqual(data);
   });
});
