import { drawGrid, drawShape, applyPattern } from './drawing.js';

export function startTutorial() {
    // Step 1: Draw a grid
    drawGrid();
    alert('This is the grid. You can draw shapes on it.');

    // Step 2: Draw a shape
    drawShape();
    alert('This is a shape. You can draw it on the grid.');

    // Step 3: Apply a pattern
    applyPattern();
    alert('This is a pattern. You can apply it to the shapes you draw.');

    // Mark the tutorial as completed
    localStorage.setItem('tutorialCompleted', true);
}
