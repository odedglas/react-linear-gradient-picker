import React from 'react';
import PropTypes from 'prop-types';
import { SketchPicker } from 'react-color';
import { Panel as ColorPicker } from 'rc-color-picker';
import UseCase from './UseCase';

import 'rc-color-picker/assets/index.css';

const rgbToRgba = (rgb, a = 1) => rgb
	.replace('rgb(', 'rgba(')
	.replace(')', `, ${a})`)

const WrapperPropTypes = {
	onSelect: PropTypes.func
};

const WrappedSketchPicker = ({ onSelect, ...rest }) => {
	return (
		<SketchPicker {...rest}
					  color={rgbToRgba(rest.color, rest.opacity)}
					  onChange={c => {
						  const { r, g, b, a } = c.rgb;
						  onSelect(`rgb(${r}, ${g}, ${b})`, a);
					  }}/>
	);
}

WrappedSketchPicker.propTypes = WrapperPropTypes;

const WrappedColorPicker = ({ onSelect, ...rest }) => (
	<ColorPicker {...rest} onChange={c => {
		onSelect(c.color, c.alpha / 100);
	}}/>
);

WrappedColorPicker.propTypes = WrapperPropTypes;

const SketchPickerStory = () => (
	<UseCase palette={[
		{ offset: '0.00', color: 'rgb(238, 241, 11)' },
		{ offset: '0.49', color: 'rgb(215, 128, 37)' },
		{ offset: '1.00', color: 'rgb(126, 32, 207)' }
	]} link={'https://github.com/react-component/color-picker'} title={'rc-color-picker'} ColorPicker={WrappedSketchPicker}/>
);

const ColorPickerStory = () => (
	<UseCase palette={[
		{ offset: '0.00', color: '#7e20cf' },
		{ offset: '0.42', color: '#d0021b' },
		{ offset: '1.00', color: '#00ccff' }
	]} link={'https://github.com/casesandberg/react-color'} title={'react-color'} ColorPicker={WrappedColorPicker}/>
);

const DefaultPickerStory = () => (
	<UseCase title="Default Picker" palette={[{ offset: '0', color: '#FF0000' }, { offset: '0.3', color: '#00FF00' }, { offset: '1', color: '#0000FF' }]}/>
);

export {
	SketchPickerStory,
	ColorPickerStory,
	DefaultPickerStory
};