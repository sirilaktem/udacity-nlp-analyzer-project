import { checkEmptyInput } from '../src/client/js/inputChecker';

describe('Testing checkEmptyInput() function', () => {
    test('When the input is empty, should return true', () => {
        expect(checkEmptyInput('')).toBe(false);
    });
    test('When the input is not empty, should return false', () => {
        expect(checkEmptyInput('hello')).toBe(true);
    });
});
