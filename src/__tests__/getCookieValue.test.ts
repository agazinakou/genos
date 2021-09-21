import { getCookieValue } from './../browser/getCookieValue';

test('Get Cookie value', () => {
  expect(getCookieValue('_ga'))
});