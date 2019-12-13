import React, { useState } from 'react';
import AnglePicker from '../../src/components/AnglePicker';

const AnglePickerStory = () => {
	const [localAngle, setLocalAngle] = useState(0);

	const background = `linear-gradient(
			${localAngle}deg, 
			rgb(238, 241, 11) 0%, rgb(208, 2, 27) 51.1%,
			rgb(126, 32, 207) 100%)`;
	return (
		<div className="aps">
			<AnglePicker angle={localAngle} setAngle={setLocalAngle}/>
			<h4>Background preview for {localAngle} Angle</h4>
			<div className="preview" style={{ background }}/>
		</div>
	);
};

export default AnglePickerStory;