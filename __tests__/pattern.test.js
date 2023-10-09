import { Pattern } from '../src/pattern.js';

describe('Pattern', () => {
    test('adjusts its scale', () => {
        const pattern = new Pattern('dots', 10, 'black');
        pattern.adjustScale(2);
        expect(pattern.size).toBe(20);
    });
});
