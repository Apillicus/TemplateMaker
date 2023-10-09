import * as THREE from 'three';

export function previewDesign(ctx) {
    // Convert the 2D canvas context to a texture
    const texture = new THREE.CanvasTexture(ctx.canvas);

    // Create a 3D scene
    const scene = new THREE.Scene();

    // Add a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Add a geometry
    const geometry = new THREE.BoxGeometry(1, 1, 1);

    // Add a material using the canvas texture
    const material = new THREE.MeshBasicMaterial({ map: texture });

    // Add a cube to the scene
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Create a renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Render the scene
    renderer.render(scene, camera);
}
