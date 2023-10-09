export class Pattern {
    constructor(type, size, color) {
        this.type = type;
        this.size = size;
        this.color = color;
    }

    applyToShape(shape) {
        // Implement pattern application to a shape
    }

    adjustScale(scale) {
        this.size *= scale;
    }
}
