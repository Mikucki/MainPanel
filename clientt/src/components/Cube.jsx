import React, { useRef } from "react";
import { Canvas } from "react-three-fiber";

const Cube = () => {
  const ref = useRef();

  function animate() {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  }

  return (
    <Canvas onFrame={animate}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh ref={ref}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"#808080"} />
      </mesh>
    </Canvas>
  );
};

export default Cube;
