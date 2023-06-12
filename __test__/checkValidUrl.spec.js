import { checkValidUrl } from '../src/client/js/inputChecker';

describe('Testing checkValidUrl() function', () => {
    test('When the URL is valid, should return true', () => {
        expect(checkValidUrl('https://www.google.com/')).toBe(true);
    });
    test('When the URL is invalid, should return false', () => {
        expect(checkValidUrl('google')).toBe(false);
    });
});
