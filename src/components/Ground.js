/* cannon hook array of ref is place on the mesh return an object*/
import { usePlane } from "@react-three/cannon";
import { groundTexture } from "../images/textures";
/* to get the cube creation */
import { useStore } from "../hooks/useStore";

export const Ground = () => {
  const [ref] = usePlane(() => ({
    /* create the deep/incline effect */
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0],
  }));

  /* add cube from the ground if try to create on the ground */
  const [addCube] = useStore((state) => [state.addCube]);

  /* set size imageTexture ground to not stretch texture*/
  groundTexture.repeat.set(100, 100);

  return (
    /* STOP PROPAGATION to stop and not got through the ground */
    /* get the position x,y,z and round the value*/
    <mesh
      onClick={(e) => {
        e.stopPropagation();
        const [x, y, z] = Object.values(e.point).map((val) => Math.ceil(val));
        addCube(x, y, z);
      }}
      ref={ref}
    >
      {/* add the geometry and the size of te plane with 2 demensions */}
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      {/* add materials on the ground */}
      <meshStandardMaterial attach="material" map={groundTexture} />
    </mesh>
  );
};
