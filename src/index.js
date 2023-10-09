import { initCanvas } from './canvas';
import { handleUserInteractions } from './eventHandlers';

window.onload = function() {
    initCanvas();
    handleUserInteractions();
}
