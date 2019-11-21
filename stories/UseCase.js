import React, { useState } from 'react'
import GradientPicker from '../src'

const Result = ({ msg }) => {
  const info = !msg ? 'Result area' : JSON.stringify(msg)
  return (<div className="result">{ info } </div>)
}

const UseCase = ({ palette, ColorPicker, link, title }) => {
	const [localPalette, setLocalPalette] = useState(palette);

	return (
		<div className="use-case-content">
			<div className="inner">
				<div className="title">
					With&nbsp;
					<a href={link} target={"_blank"}>{title}</a>
				</div>
				<Result msg={ localPalette } />
				<GradientPicker {...{
					width: 320,
					height: 32,
					palette: localPalette,
					onPaletteChange: setLocalPalette
				}}>
					{ ColorPicker ? <ColorPicker/> : null }
				</GradientPicker>
			</div>
		</div>
	)
};

export default UseCase;
