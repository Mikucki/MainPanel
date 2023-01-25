import "../src/main.css";
import * as THREE from "three";
import * as dat from "dat.gui";
import { DirectionalLight, Texture } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import salon from "../src/images/salon.jpg";
import choinka from "../src/images/choinka.jpg";
import kuchnia from "../src/images/kuchnia.jpg";
import lazienka from "../src/images/lazienka.jpg";
import salon2 from "../src/images/salon2.jpg";
import konsola from "../src/images/konsola.jpg";

const scene = new THREE.Scene();

const textureLoader = new THREE.TextureLoader();

const boxMaterials = [
  new THREE.MeshBasicMaterial({ map: textureLoader.load(salon) }),
  new THREE.MeshBasicMaterial({ map: textureLoader.load(choinka) }),
  new THREE.MeshBasicMaterial({ map: textureLoader.load(kuchnia) }),
  new THREE.MeshBasicMaterial({ map: textureLoader.load(lazienka) }),
  new THREE.MeshBasicMaterial({ map: textureLoader.load(salon2) }),
  new THREE.MeshBasicMaterial({ map: textureLoader.load(konsola) }),
];

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({
  color: "#ffffff",
});
const box = new THREE.Mesh(geometry, boxMaterials);
scene.add(box);

function resizeCanvasToDisplaySize() {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  if (canvas.width !== width || canvas.height !== height) {
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }
}

// Camera

const sizes = {
  width: 400,
  height: 400,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;

function animate() {
  box.rotation.y += 0.01;
  let fixedNum = box.rotation.y.toFixed(0);
  let fixedNum2 = box.rotation.z.toFixed(2);
  console.log(fixedNum);

  if (Number(fixedNum) % 2 === 0) {
    box.rotation.z += 0.1;
  } else {
    box.rotation.y += 0.1;
  }
  resizeCanvasToDisplaySize();

  renderer.render(scene, camera);
}

scene.add(camera);

const canvas = document.querySelector(".webgl");

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

renderer.setAnimationLoop(animate);

const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
scene.add(directionalLight);
directionalLight.position.set(3, 10, 0);

renderer.setClearColor(0xffffff);

renderer.render(scene, camera);
