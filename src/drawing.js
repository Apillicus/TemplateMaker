import { Pattern } from './pattern.js';

export function drawGrid(ctx) {
    // Implement grid drawing functionality
}

export function drawShape(ctx, event) {
    // Implement shape drawing functionality
}

export function applyPattern(ctx, patternIndex) {
    const patternLibrary = new PatternLibrary();
    const pattern = patternLibrary.getPattern(patternIndex);
    pattern.applyToShape(ctx);
}
