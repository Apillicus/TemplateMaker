import { zoom, pan } from '../src/zoomAndPan.js';

describe('Zooming and panning', () => {
    test('zooms in and out', () => {
        const event = { preventDefault: jest.fn(), deltaY: -1, target: { style: {} } };
        zoom(event);
        expect(event.target.style.transform).toBe('scale(1.1)');
    });

    test('pans the canvas', () => {
        const event = { preventDefault: jest.fn(), clientX: 100, clientY: 200, target: { style: {} } };
        pan(event);
        expect(event.target.style.transform).toBe('translate(100px, 200px)');
    });
});
