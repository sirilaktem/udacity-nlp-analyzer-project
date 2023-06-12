import { translatePolarity } from '../src/client/js/formHandler';

describe('Testing translatePolarity() function', () => {
    test('When the input is empty, should return N/A', () => {
        expect(translatePolarity('')).toBe('N/A');
    });
    test('When the input is P+, should return STRONG POSITIVE', () => {
        expect(translatePolarity('P+')).toBe('STRONG POSITIVE');
    });
    test('When the input is P, should return POSITIVE', () => {
        expect(translatePolarity('P')).toBe('POSITIVE');
    });
    test('When the input is NEU, should return NEUTRAL', () => {
        expect(translatePolarity('NEU')).toBe('NEUTRAL');
    });
    test('When the input is N, should return NEGATIVE', () => {
        expect(translatePolarity('N')).toBe('NEGATIVE');
    });
    test('When the input is N+, should return STRONG NEGATIVE', () => {
        expect(translatePolarity('N+')).toBe('STRONG NEGATIVE');
    });
    test('When the input is NONE, should return WITHOUT POLARITY', () => {
        expect(translatePolarity('NONE')).toBe('WITHOUT POLARITY');
    });
});
