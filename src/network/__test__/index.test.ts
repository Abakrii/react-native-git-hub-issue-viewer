import axios from 'axios';
import Repos from './repos';

jest.mock('axios');

test('should fetch users', () => {
  const repos = [{name: 'Bob'}];
  const resp = {data: repos};
  axios.get.mockResolvedValue(resp);

  return Repos.all().then(data => expect(data).toEqual(repos));
});
