import { PointerLockControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

/* click of mouse take control of player view */
export const FPV = () => {
  /* connect to the camera */
  const { camera, gl } = useThree();

  return <PointerLockControls args={[camera, gl.domElement]} />;
};
