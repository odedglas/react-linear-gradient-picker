import { storiesOf } from '@storybook/react';
import React from 'react';

import AnglePickerStory from './AnglePicker';
import {
  SketchPickerStory,
  VerticalPickerStory,
  ColorPickerStory,
  DefaultPickerStory,
  VerticalPickerStoryPopoverColorPicker,
  HorizontalPickerStoryPopoverColorPicker,
} from './GradientPicker';
import PopoverStory from './Popover';
import './Story.css';

storiesOf('Gradient Picker', module)
  .add('React Color Picker', SketchPickerStory)
  .add('React Color', ColorPickerStory)
  .add('Default Popover', () => <PopoverStory />)
  .add('Popover Without Angle Picker', () => <PopoverStory showAngle={false} />)
  .add('Popover Without Type Picker', () => <PopoverStory showType={false} showAngle={false} />)
  .add('Default Color Picker', DefaultPickerStory)
  .add('Vertical Color Picker', VerticalPickerStory)
  .add('Vertical Color Picker with popover Color Picker', VerticalPickerStoryPopoverColorPicker)
  .add('Horizontal Color Picker with popover Color Picker', HorizontalPickerStoryPopoverColorPicker);

storiesOf('Angle Picker', module).add('Default', AnglePickerStory);
