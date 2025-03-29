import React, { useState } from 'react';

import { GradientPicker } from '../../src';
import { getGradientPreview } from '../../src/lib';
import type { ColorStop } from '../../src/types';

interface UseCaseProps {
  palette: ColorStop[];
  title: string;
  ColorPicker?: any; // eslint-disable-line
  link?: string;
  direction?: 'horizontal' | 'vertical';
  colorPickerMode?: 'static' | 'popover';
}

const UseCase = ({ palette, ColorPicker, link, title, colorPickerMode = 'static', direction = 'horizontal' }: UseCaseProps) => {
  const [localPalette, setLocalPalette] = useState(palette);

  const { background, angle } = getGradientPreview(localPalette);

  const info = JSON.stringify(localPalette);

  return (
    <div className="use-case-content">
      <div className="inner">
        <div className="title">
          With&nbsp;
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </div>
        <div className="result">{info} </div>
        <GradientPicker
          {...{
            width: 320,
            paletteHeight: 32,
            palette: localPalette,
            onPaletteChange: setLocalPalette,
            direction,
            colorPickerMode,
          }}
        >
          {ColorPicker ? <ColorPicker /> : <></>}
        </GradientPicker>
        <hr />
        <h4>Background preview for {angle} Angle</h4>
        <div className="preview" style={{ background }} />
      </div>
    </div>
  );
};

export default UseCase;
