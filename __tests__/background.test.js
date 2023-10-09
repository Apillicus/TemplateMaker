import { setBackground } from '../src/background.js';

describe('Background', () => {
    test('sets the background color', () => {
        const ctx = { fillStyle: '', fillRect: jest.fn() };
        setBackground(ctx, '#FF0000');
        expect(ctx.fillStyle).toBe('#FF0000');
        expect(ctx.fillRect).toHaveBeenCalledWith(0, 0, ctx.canvas.width, ctx.canvas.height);
    });
});
