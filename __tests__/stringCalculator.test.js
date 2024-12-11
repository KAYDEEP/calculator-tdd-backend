const { add } = require('../src/utils/stringCalculator');

describe('String Calculator', () => {
    test('should return 0 for an empty string', () => {
        expect(add("")).toBe(0);
    });
    test('should return the number itself for a single input', () => {
        expect(add("1")).toBe(1);
    });
});
