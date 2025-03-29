import React from 'react';
import { GRADIENT_TYPES } from '../../types';
import { GradientTypePickerProps } from './types';
import './index.scss';

const GradientTypePicker: React.FC<GradientTypePickerProps> = ({ gradientType, onGradientTypeChange }) => {
  const linearActive = gradientType === GRADIENT_TYPES.LINEAR;

  return (
    <span className="type-picker-wrapper">
      <span className={`type-picker lg ${linearActive ? 'active' : ''}`} onClick={() => onGradientTypeChange(GRADIENT_TYPES.LINEAR)} />
      <span className={`type-picker rg ${!linearActive ? 'active' : ''}`} onClick={() => onGradientTypeChange(GRADIENT_TYPES.RADIAL)} />
    </span>
  );
};

export { GRADIENT_TYPES };
export default GradientTypePicker;
