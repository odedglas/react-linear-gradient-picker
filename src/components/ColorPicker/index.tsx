import React from 'react';
import { COLORS } from './constants';
import { ColorPickerProps } from './types';
import './index.scss';

const ColorPicker: React.FC<ColorPickerProps> = ({ onSelect }) => (
  <div className="cp">
    {COLORS.map(({ value, name }) => (
      <div onClick={() => onSelect(value)} key={name} title={name} style={{ backgroundColor: value }} />
    ))}
  </div>
);

export default ColorPicker;
