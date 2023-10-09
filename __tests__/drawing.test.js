import { drawGrid, drawShape, applyPattern } from '../src/drawing.js';

describe('Drawing', () => {
    let ctx;

    beforeEach(() => {
        ctx = { beginPath: jest.fn(), arc: jest.fn(), stroke: jest.fn(), strokeRect: jest.fn(), fillRect: jest.fn() };
    });

    test('draws a grid', () => {
        ctx.canvas = { width: 100, height: 100 };
        drawGrid(ctx);
        expect(ctx.strokeRect).toHaveBeenCalledTimes(4);
    });

    test('draws a shape', () => {
        const event = { clientX: 100, clientY: 200 };
        drawShape(ctx, event);
        expect(ctx.arc).toHaveBeenCalledWith(100, 200, 50, 0, 2 * Math.PI);
    });

    test('applies a pattern', () => {
        const pattern = 'pattern.png';
        global.Image = class {
            constructor() {
                this.onload = null;
            }
            set src(value) {
                this.onload();
            }
        };
        ctx.createPattern = jest.fn();
        applyPattern(ctx, pattern);
        expect(ctx.createPattern).toHaveBeenCalled();
    });
});
