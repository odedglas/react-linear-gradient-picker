import React from 'react'
import PropTypes from 'prop-types'
import { COLORS } from './constants'
import './index.css'

const ColorPicker = ({ onSelect, color }) => {
	return (
		<div className="cp">
			{COLORS.map(({ value, name, }) =>
				<div onClick={() => onSelect(value)}
				     key={name}
				     title={name}
				     style={{ backgroundColor: value }}
				/>
			)}
			<pre>Active color: {color}</pre>
		</div>
	)
};

ColorPicker.propTypes = {
	color: PropTypes.string.isRequired,
	onSelect: PropTypes.func.isRequired
};

export default ColorPicker
