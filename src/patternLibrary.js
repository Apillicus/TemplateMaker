import { Pattern } from './pattern.js';

export class PatternLibrary {
    constructor() {
        this.patterns = [
            new Pattern('dots', 10, 'black'),
            new Pattern('stripes', 20, 'blue'),
            // Add more preset patterns
        ];
    }

    getPattern(index) {
        return this.patterns[index];
    }
}
