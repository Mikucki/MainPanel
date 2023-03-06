import React, { useRef } from "react";
import { Canvas } from "react-three-fiber";

const Cube = () => {
  const ref = useRef();

  function animate() {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  }

  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
    </mesh>
  );
};

export default Cube;
