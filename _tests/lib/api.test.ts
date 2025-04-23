import { getFiles } from '../../src/lib/api';
import data from '../../data.json';

describe('API Tests', () => {
   test('getFiles returns the expected data', async () => {
      const files = await getFiles();
      expect(files).toEqual(data);
   });
});
