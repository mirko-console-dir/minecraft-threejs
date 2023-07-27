import { useFrame, useThree } from "@react-three/fiber";
import { useSphere } from "@react-three/cannon";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";
/* Custom Hook player movement */
import { useKeyboard } from "../hooks/useKeyboard";

const JUMP_FORCE = 4;
const SPEED = 4;

export const Player = () => {
  /* check if passing the hook to see in the console log */
  /* const actions = useKeyboard();
	console.log('actions', Object.entries(actions).filter(([k,v])=> v)) */
  const { moveBackward, moveForward, moveRight, moveLeft, jump } =
    useKeyboard();
  /* need a camera */
  const { camera } = useThree();
  /* geometry thay rapresent the player using the Sphere */
  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: "Dynamic",
    position: [0, 1, 0] /* 1 to start from the ground */,
  }));
  /*  */
  const vel = useRef([0, 0, 0]);
  useEffect(() => {
    api.velocity.subscribe((v) => (vel.current = v));
  }, [api.velocity]);

  /* the pos regerence now follo the SPHERE, SUBSCRIBE ON THE CHANGE POSITION OF THE SPHERE */
  const pos = useRef([0, 0, 0]);
  useEffect(() => {
    api.position.subscribe((p) => (pos.current = p));
  }, [api.position]);

  /* useFrame run for every frames, tell to the camera to follow the sphere */
  /* MOVE IN DIRECTIONS create 3 vectors to be able to turn around:
   direction | speed | side speed  */
  useFrame(() => {
    camera.position.copy(
      new Vector3(pos.current[0], pos.current[1], pos.current[2])
    );
    /* set directions keyboard to the sphere */
    const direction = new Vector3();

    const frontVector = new Vector3(
      0,
      0,
      (moveBackward ? 1 : 0) - (moveForward ? 1 : 0)
    );

    const sideVector = new Vector3(
      (moveLeft ? 1 : 0) - (moveRight ? 1 : 0),
      0,
      0
    );

    /* calculation origin from directions, SPEED how fast we want to go there, frontVector and sideVector in correlation with camera.rotation */
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(camera.rotation);
    /* Y have to be the same so val.current[1] */
    api.velocity.set(direction.x, vel.current[1], direction.z);

    /* make sure the velocity in the Y direction is closer to 0 to not jump again in the sky, (but if take the frame 0.05 you can jump 2 times) */
    if (jump && Math.abs(vel.current[1]) < 0.05) {
      api.velocity.set(vel.current[0], JUMP_FORCE, vel.current[2]);
    }
  });

  return <mesh ref={ref}></mesh>;
};
