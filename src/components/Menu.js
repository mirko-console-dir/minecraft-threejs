import React from "react"
import { useStore } from "../hooks/useStore"

const Menu = ({ toggleModalCommands }) => {
	const [saveWorld, resetWorld] = useStore((state) => [state.saveWorld, state.resetWorld])

	return (
		<div className="menu absolute" width="100%">
			<button className="pushable next__btn__pushable"
				onClick={() => saveWorld()}
			>
				<span className="front next__btn__front btn__menu__text">Save</span>
			</button>
			<button className="pushable next__btn__pushable"
				onClick={() => resetWorld()}
			>
				<span className="front next__btn__front btn__menu__text">Reset</span>
			</button>
			<button className="pushable next__btn__pushable"
				onClick={toggleModalCommands}
			>
				<span className="front next__btn__front btn__menu__text">Show Commands</span>
			</button>
			<p className="cursor__msg">Press ESC to show cursor</p>
		</div>
	)
}
export default React.memo(Menu)