import { exportDesign } from '../src/export.js';

describe('Exporting', () => {
    test('exports the design', () => {
        const ctx = { canvas: { toDataURL: jest.fn(() => 'data:image/png;base64,') } };
        global.document = { createElement: jest.fn(() => ({ click: jest.fn() })) };
        exportDesign(ctx);
        expect(document.createElement).toHaveBeenCalledWith('a');
    });
});
