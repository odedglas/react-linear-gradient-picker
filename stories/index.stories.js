import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { SketchPicker } from 'react-color';
import { Panel as ColorPicker } from 'rc-color-picker';
import UseCase from './UseCase';
import './Story.css';
import 'rc-color-picker/assets/index.css';

const addOpacityToHex = (color, opacity = 1) => {
	if (opacity === 1 || color.length > 9) {
		return color;
	}

	return color + Math.floor(opacity * 255).toString(16);
};

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

storiesOf('Gradient Picker', module)
	.add('React Color (rc-color-picker)', () => (
		<UseCase palette={[
			{ offset: '0.00', color: '#eef10b' },
			{ offset: '0.49', color: '#d78025' },
			{ offset: '0.72', color: '#d0021b' },
			{ offset: '1.00', color: '#7e20cf' }
		]} link={'https://github.com/react-component/color-picker'} title={'rc-color-picker'} ColorPicker={WrappedSketchPicker}/>
	))
	.add('React Color (react-color)', () => (
		<UseCase palette={[
			{ offset: '0.00', color: '#7e20cf' },
			{ offset: '0.28', color: '#d0021b' },
			{ offset: '0.65', color: '#ffcc00' },
			{ offset: '1.00', color: '#00ccff' }
		]} link={'https://github.com/casesandberg/react-color'} title={'react-color'} ColorPicker={WrappedColorPicker}/>
	))
	.add('Default Color Picker', () => (
		<UseCase title="Default Picker" palette={[{ offset: '0', color: '#FF0000' }, { offset: '0.3', color: '#00FF00' }, { offset: '1', color: '#0000FF' }]}/>
	));
