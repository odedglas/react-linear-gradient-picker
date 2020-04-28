import React from 'react';
import PropTypes from 'prop-types';
import { SketchPicker } from 'react-color';
import { Panel as ColorPicker } from 'rc-color-picker';
import UseCase from './UseCase';

import 'rc-color-picker/assets/index.css';

/**
 * (c) https://stackoverflow.com/questions/21646738/convert-hex-to-rgba
 */
function addOpacityToHex(hex, a = 1) {
	let c;
	if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
		c = hex.substring(1).split('');
		if (c.length === 3) {
			c = [c[0], c[0], c[1], c[1], c[2], c[2]];
		}
		c = '0x' + c.join('');
		return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + a + ')';
	}
	if (/rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/.test(hex)) { /** RGB color */
		return hex.replace('rgb', 'rgba').replace(')', `, ${a})`);
	}
	throw new Error('Bad Hex');
}

const WrapperPropTypes = {
	onSelect: PropTypes.func
};

const WrappedSketchPicker = ({ onSelect, ...rest }) => (
	<SketchPicker {...rest}
		color={addOpacityToHex(rest.color, rest.opacity)}
		onChange={c => {
			onSelect(c.hex, c.rgb.a);
		}}/>
);

WrappedSketchPicker.propTypes = WrapperPropTypes;

const WrappedColorPicker = ({ onSelect, ...rest }) => (
	<ColorPicker {...rest} onChange={c => {
		onSelect(c.color, c.alpha / 100);
	}}/>
);

WrappedColorPicker.propTypes = WrapperPropTypes;

const SketchPickerStory = () => (
	<UseCase palette={[
		{ offset: '0.00', color: '#eef10b' },
		{ offset: '0.49', color: '#d78025' },
		{ offset: '1.00', color: '#7e20cf' }
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