import React, { useMemo } from 'react';
import { sortPalette } from '../../lib';
import { DIRECTIONS } from '../GradientPicker/constants';
import { PaletteProps, LinearGradientProps } from './types';

const generateGradientId = (): string => '' + Math.random().toString(36).substr(2, 9);

const getLinearGradientProps = (direction: typeof DIRECTIONS[keyof typeof DIRECTIONS]): LinearGradientProps => (
  direction === DIRECTIONS.HORIZONTAL 
    ? { x1: 0, y1: 0.5, x2: 1, y2: 0.5 } 
    : { x1: 0.5, y1: 0, x2: 0.5, y2: 1 }
);

const Palette: React.FC<PaletteProps> = ({ palette, width, height, direction }) => {
  const sortedPalette = sortPalette(palette);
  const gradientId = useMemo(generateGradientId, [palette.length]);
  const containerStyle = direction === DIRECTIONS.HORIZONTAL 
    ? { width, height } 
    : { width: height, height: width };

  return (
    <div className="palette" style={containerStyle}>
      <svg width="100%" height="100%">
        <defs>
          <linearGradient id={gradientId} {...getLinearGradientProps(direction)}>
            {sortedPalette.map(({ id, offset, color, opacity = 1 }) => (
              <stop key={id} offset={offset} style={{ stopColor: color, stopOpacity: opacity }} />
            ))}
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill={`url(#${gradientId})`} />
      </svg>
    </div>
  );
};

export default Palette; 
