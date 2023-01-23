import "../src/main.css";
import * as THREE from "three";
import * as dat from "dat.gui";
import { DirectionalLight } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: "#ff0000" });
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

let step = 0;
let speed = 0;

function animate() {
  box.rotation.x += 0.02;
  box.rotation.y += 0.02;

  renderer.render(scene, camera);
}

scene.add(camera);

const canvas = document.querySelector(".webgl");
console.log(canvas);
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

renderer.setAnimationLoop(animate);

const gui = new dat.GUI();

const options = {
  sphereColor: "#ffea00",
  wireframe: true,
  speed: 0.01,
};

const orbit = new OrbitControls(camera, renderer.domElement);
orbit.update();

gui.addColor(options, "sphereColor").onChange(function (e) {
  box.material.color.set(e);
});

gui.add(options, "wireframe").onChange(function (e) {
  box.material.wireframe = e;
});

gui.add(options, "speed", 0);

const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
scene.add(directionalLight);
directionalLight.position.set(10, 10, 0);

const dLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5);
scene.add(dLightHelper);

renderer.render(scene, camera);
