export function zoom(event) {
    event.preventDefault();
    const scale = event.deltaY < 0 ? 1.1 : 0.9;
    event.target.style.transform = `scale(${scale})`;
}

export function pan(event) {
    event.preventDefault();
    const { clientX, clientY } = event;
    event.target.style.transform = `translate(${clientX}px, ${clientY}px)`;
}
