export function exportDesign(ctx) {
    const dataUrl = ctx.canvas.toDataURL();
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'design.png';
    link.click();
}
