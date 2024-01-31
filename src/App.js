import { Physics } from "@react-three/cannon";
import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Ground } from "./components/Ground";
import { Player } from "./components/Player";
import { FPV } from "./components/FPV";
import { Cubes } from "./components/Cubes";
import { TextureSelector } from "./components/TextureSelector";
import { Menu } from "./components/Menu";
import { CommandsModal } from "./components/CommandsModal";
import React, {useState} from "react";

function App() {

  const [modalCommands, setModalCommands] = useState(true)
	const toggleModalCommands = () =>{
		setModalCommands(!modalCommands)
	}
  return (
    <>
      {!modalCommands && 
        <Canvas>
          <Sky sunPosition={[100, 100, 20]} />
          {/* light 3D */}
          <ambientLight intensity={0.5} />
          <FPV />
          {/* hook from cannon to create ground */}
          <Physics>
            <Player />
            <Cubes />
            <Ground />
          </Physics>
        </Canvas>
      }
      {/* cursor on the screen First Person View*/}
      <div className="absolute centered cursor">+</div>
      <TextureSelector />
      <Menu toggleModalCommands={toggleModalCommands} />
        {modalCommands && 
         <CommandsModal toggleModalCommands={toggleModalCommands}/>
        }
    </>
  );
}

export default App;
