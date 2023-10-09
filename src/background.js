export function setDefaultBackground(ctx) {
    ctx.fillStyle = '#FFFFFF'; // Default to white background
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

export function setBackground(ctx, colorOrTexture) {
    if (typeof colorOrTexture === 'string') {
        ctx.fillStyle = colorOrTexture;
    } else {
        ctx.fillStyle = ctx.createPattern(colorOrTexture, 'repeat');
    }
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
