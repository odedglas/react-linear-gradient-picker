import PropTypes from 'prop-types';
import React from 'react';

import { COLORS } from './constants';
import './index.scss';

const ColorPicker = ({ onSelect }) => (
  <div className="cp">
    {COLORS.map(({ value, name }) => (
      <div onClick={() => onSelect(value)} key={name} title={name} style={{ backgroundColor: value }} />
    ))}
  </div>
);

ColorPicker.propTypes = {
  color: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ColorPicker;
