import React, { useState } from 'react'
import { SketchPicker } from 'react-color'
import './index.css';

const FullExample = () => {
	const [displayPicker, setDisplayPicker] = useState(false);
	const [color, setColor] = useState({ r: '241', g: '112', b: '19', a: '1', });

	const togglePicker = () => setDisplayPicker(!displayPicker);
	const handleColorChange = (color) => setColor(color.rgb);

	const { r, g, b, a } = color;
	const background = `rgba(${r}, ${g}, ${b}, ${a})`;

	return (
		<div className="gpw">
			<div className="trigger" onClick={togglePicker}>
				<div className="inner" style={{ background }}/>
			</div>
			{ displayPicker && (
				<div className="popover">
					<div className="overlay" onClick={() => setDisplayPicker(false)}/>
					<SketchPicker color={color} onChange={handleColorChange} />
				</div>
			) }
		</div>
	)
};

export default FullExample