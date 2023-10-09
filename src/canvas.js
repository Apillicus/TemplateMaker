export function initCanvas() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth * 0.8;
        canvas.height = window.innerHeight;
    });

    return ctx;
}
