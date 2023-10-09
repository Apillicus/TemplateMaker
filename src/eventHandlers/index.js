import { zoom, pan } from '../zoomAndPan';
import { drawGrid, drawShape, applyPattern } from '../drawing';

export function handleUserInteractions() {
    const canvas = document.getElementById('canvas');

    canvas.addEventListener('wheel', zoom);
    canvas.addEventListener('mousedown', pan);
    canvas.addEventListener('mousemove', drawShape);
    canvas.addEventListener('mouseup', applyPattern);
}
