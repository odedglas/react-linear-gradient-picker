import React from 'react';
import { storiesOf } from '@storybook/react';
import { SketchPickerStory, VerticalPickerStory, ColorPickerStory, DefaultPickerStory, VerticalPickerStoryAutoHideColorPicker, HorizontalPickerStoryAutoHideColorPicker } from './GradientPicker';
import PopoverStory from './Popover';
import AnglePickerStory from './AnglePicker';
import './Story.css';

storiesOf('Gradient Picker', module)
	.add('React Color Picker', SketchPickerStory)
	.add('React Color', ColorPickerStory)
	.add('Default Popover', () => (<PopoverStory/>))
	.add('Popover Without Angle Picker', () => (<PopoverStory showAngle={false}/>))
	.add('Popover Without Type Picker', () => (<PopoverStory  showType={false} showAngle={false}/>))
	.add('Default Color Picker', DefaultPickerStory)
	.add('Vertical Color Picker', VerticalPickerStory)
	.add('Vertical Color Picker with auto-hideable Color Picker', VerticalPickerStoryAutoHideColorPicker)
	.add('Horizontal Color Picker with auto-hideable Color Picker', HorizontalPickerStoryAutoHideColorPicker);

storiesOf('Angle Picker', module)
	.add('Default', AnglePickerStory);