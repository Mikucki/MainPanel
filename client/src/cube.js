import "../src/main.css";
import * as THREE from "three";
import DirectionalLight from "three";
import Scene from "three";
import Texture from "three";
import modern from "./Modern.png";

const scene = new THREE.Scene();

const textureLoader = new THREE.TextureLoader();
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({
  color: "#808080",
  map: textureLoader.load(modern),
});
const box = new THREE.Mesh(geometry, material);
scene.add(box);

const sizes = {
  width: 300,
  height: 250,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 2;

function animate() {
  box.rotation.y += 0.01;
  box.rotation.z += 0.01;
  box.rotation.x += 0.01;

  renderer.render(scene, camera);
}

scene.add(camera);

const canvas = document.querySelector(".webgl");

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

renderer.setAnimationLoop(animate);

const mainLight = new THREE.AmbientLight(0xffffff, 0.1);
scene.add(mainLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.9);
directionalLight.position.set(1, -1, 11);
scene.add(directionalLight);

renderer.setClearColor(0xffffff, 0);
renderer.render(scene, camera);
