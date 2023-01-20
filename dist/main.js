/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("console.log(THREE);\r\n\r\nconst scene = new THREE.Scene();\r\n\r\nconst geometry = new THREE.BoxGeometry(1, 1, 1);\r\nconst material = new THREE.MeshBasicMaterial({ color: \"#ff0000\" });\r\nconst mesh = new THREE.Mesh(geometry, material);\r\nscene.add(mesh);\r\n\r\n// Camera\r\n\r\nconst sizes = {\r\n  width: 800,\r\n  height: 600,\r\n};\r\n\r\nconst camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);\r\ncamera.position.z = 6;\r\ncamera.position.y = 1;\r\n\r\nscene.add(camera);\r\n\r\nconst canvas = document.querySelector(\".webgl\");\r\nconsole.log(canvas);\r\nconst renderer = new THREE.WebGLRenderer({\r\n  canvas: canvas,\r\n});\r\nrenderer.setSize(sizes.width, sizes.height);\r\nrenderer.render(scene, camera);\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;