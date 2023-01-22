import "../src/main.css";
import * as THREE from "three";
import { Box2 } from "three";

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "#ff0000" });
const box = new THREE.Mesh(geometry, material);
scene.add(box);

// Camera

const sizes = {
  width: 800,
  height: 600,
};

const axiesHelper = new THREE.AxesHelper(1);
scene.add(axiesHelper);

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 6;
camera.position.y = 3;
camera.position.x = 3;

function animate(time) {
  box.rotation.x += time / 10000000;
  box.rotation.y += time / 10000000;
  renderer.render(scene, camera);
}

scene.add(camera);

const canvas = document.querySelector(".webgl");
console.log(canvas);
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);

renderer.setAnimationLoop(animate);
