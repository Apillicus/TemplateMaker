import { zoom, pan } from './zoomAndPan.js';
import { drawGrid, drawShape, applyPattern } from './drawing.js';

export function handleUserInteractions(ctx, socket) {
    const canvas = document.getElementById('canvas');

    canvas.addEventListener('wheel', zoom);
    canvas.addEventListener('mousedown', pan);
    canvas.addEventListener('mousemove', (event) => {
        const data = drawShape(ctx, event);
        socket.emit('draw', data);
    });
    canvas.addEventListener('mouseup', applyPattern);
}
