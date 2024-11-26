import React from "react"
import { useStore } from "../hooks/useStore"

const Menu = ({ toggleModalCommands }) => {
	const [saveWorld, resetWorld] = useStore((state) => [state.saveWorld, state.resetWorld])

	return (
		<div className="menu absolute" width="100%">
			<button
				onClick={() => saveWorld()}
			>Save</button>
			<button
				onClick={() => resetWorld()}
			>Reset</button>
			<button
				onClick={toggleModalCommands}
			>Show Commands</button>
			<p>Keep press ESC to show cursor</p>
		</div>
	)
}
export default React.memo(Menu)