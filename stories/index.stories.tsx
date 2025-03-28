import type { Meta, StoryObj } from '@storybook/react';
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

const meta: Meta = {
  title: 'Gradient Picker',
};

export default meta;
type Story = StoryObj;

export const ReactColorPicker: Story = {
  render: () => SketchPickerStory(),
};

export const ReactColor: Story = {
  render: () => ColorPickerStory(),
};

export const DefaultPopover: Story = {
  render: () => <PopoverStory />,
};

export const PopoverWithoutAnglePicker: Story = {
  render: () => <PopoverStory showAngle={false} />,
};

export const PopoverWithoutTypePicker: Story = {
  render: () => <PopoverStory showType={false} showAngle={false} />,
};

export const DefaultColorPicker: Story = {
  render: () => DefaultPickerStory(),
};

export const VerticalColorPicker: Story = {
  render: () => VerticalPickerStory(),
};

export const VerticalColorPickerWithPopoverColorPicker: Story = {
  render: () => VerticalPickerStoryPopoverColorPicker(),
};

export const HorizontalColorPickerWithPopoverColorPicker: Story = {
  render: () => HorizontalPickerStoryPopoverColorPicker(),
};

// Angle Picker Stories
export const AnglePicker: Story = {
  render: () => AnglePickerStory(),
};
