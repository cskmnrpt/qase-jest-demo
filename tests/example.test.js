const { qase } = require("jest-qase-reporter/jest");

describe('My First Test', () => {
    test(qase([418, 419], 'Several ids'), () => {
        expect(true).toBe(true);
    });

    test('Correct test', () => {
        expect(true).toBe(true);
    });

    test.skip('Skipped test', () => {
        expect(true).toBe(true);
    });

    test('Failed test', () => {
        expect(true).toBe(false);
    });
});