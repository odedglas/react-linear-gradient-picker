import { func, string } from 'prop-types';
import React from 'react';
import './index.scss';

export const GRADIENT_TYPES = {
  LINEAR: 'linear',
  RADIAL: 'radial',
};

const GradientTypePicker = ({ gradientType, onGradientTypeChange }) => {
  const linearActive = gradientType === GRADIENT_TYPES.LINEAR;

  return (
    <span className="type-picker-wrapper">
      <span className={`type-picker lg ${linearActive ? 'active' : ''}`} onClick={() => onGradientTypeChange(GRADIENT_TYPES.LINEAR)} />
      <span className={`type-picker rg ${!linearActive ? 'active' : ''}`} onClick={() => onGradientTypeChange(GRADIENT_TYPES.RADIAL)} />
    </span>
  );
};

GradientTypePicker.propTypes = {
  gradientType: string,
  onGradientTypeChange: func,
};

export default GradientTypePicker;
