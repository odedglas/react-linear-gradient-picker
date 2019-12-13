import React from 'react';
import { storiesOf } from '@storybook/react';
import { SketchPickerStory, ColorPickerStory, DefaultPickerStory } from './GradientPicker';
import FullExample from './FullExample';
import AnglePickerStory from './AnglePicker';
import './Story.css';

storiesOf('Gradient Picker', module)
	.add('React Color Picker', SketchPickerStory)
	.add('React Color', ColorPickerStory)
	.add('Full Example', FullExample)
	.add('Default Color Picker', DefaultPickerStory);

storiesOf('Angle Picker', module)
	.add('Default', AnglePickerStory);


