import * as THREE from '/dist/packages/threejs/src/Three.js';

// Get a reference to your existing canvas element
var canvas = document.getElementById('render-canvas');

// Create a new renderer with the canvas element
var renderer = new THREE.WebGLRenderer( { alpha: true , canvas : canvas } );
renderer.setClearColor( 0x000000, 0 ); // the default
renderer.setPixelRatio(10);

// Set up the scene and camera
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/2 / window.innerHeight, 0.1, 1000);

camera.position.z = 5;

// Add spheres to the scene
var spheres = [];
var numSpheres = 55;
var sphereRadius = 0.015;
var sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xFF3131 });

for (var i = 0; i < numSpheres; i++) {
    var sphereGeometry = new THREE.SphereGeometry(sphereRadius, 32, 32);
    var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    spheres.push(sphere);
    scene.add(sphere);
}

// Position spheres along the x-axis
var spacingX = .1;
for (var i = 0; i < numSpheres; i++) {
    spheres[i].position.x = (i - (numSpheres - 1) / 2) * spacingX;
}

// Animation parameters
var amplitude = 1; // Amplitude of the sine wave
var frequency = 0.5; // Frequency of the sine wave
var time = 0; // Initial time

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Update time
    time += 0.01;

    // Update spheres' positions based on sine wave
    for (var i = 0; i < numSpheres; i++) {
        var x = spheres[i].position.x;
        var y = Math.sin(time * frequency + x) * amplitude;
        spheres[i].position.y = y;
    }

    // Render the scene
    renderer.render(scene, camera);
}

// Start the animation loop
animate();
