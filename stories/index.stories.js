import React from 'react';
import { storiesOf } from '@storybook/react';
import { SketchPickerStory, ColorPickerStory, DefaultPickerStory } from './GradientPicker';
import PopoverStory from './Popover';
import AnglePickerStory from './AnglePicker';
import './Story.css';

storiesOf('Gradient Picker', module)
	.add('React Color Picker', SketchPickerStory)
	.add('React Color', ColorPickerStory)
	.add('Popover', () => (<PopoverStory/>))
	.add('Popover With Angle Picker', () => (<PopoverStory showAngle={true}/>))
	.add('Default Color Picker', DefaultPickerStory);

storiesOf('Angle Picker', module)
	.add('Default', AnglePickerStory);