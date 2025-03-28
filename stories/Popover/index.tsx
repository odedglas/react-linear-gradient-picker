import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import GradientPickerPopover, { GRADIENT_TYPES } from '../../src/components/GradientPickerPopover';
import { GradientType } from '../../src/components/GradientTypePicker/types';
import { WrappedProps } from '../GradientPicker';
import './index.css';

/**
 * (c) https://stackoverflow.com/questions/21646738/convert-hex-to-rgba
 */
function addOpacityToHex(hex: string, a = 1) {
  let c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('') as any;
    return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + a + ')';
  }
  if (/rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/.test(hex)) {
    /** RGB color */
    return hex.replace('rgb', 'rgba').replace(')', `, ${a})`);
  }
  throw new Error('Bad Hex');
}

const WrappedSketchPicker = ({ onSelect, ...rest }: WrappedProps) => (
  <SketchPicker
    {...rest}
    color={addOpacityToHex(rest.color ?? '', rest.opacity)}
    onChange={c => {
      onSelect(c.hex, c.rgb.a);
    }}
  />
);

const initialPallet = [
  { offset: 0.00, color: 'rgb(238, 241, 11)' },
  { offset: 1.00, color: 'rgb(126, 32, 207)' },
];

const PopoverStory = ({ showAngle, showType }: { showAngle?: boolean, showType?: boolean }) => {
  const [open, setOpen] = useState(false);
  const [angle, setAngle] = useState(90);
  const [gradientType, setGradientType] = useState<GradientType>(GRADIENT_TYPES.LINEAR);
  const [palette, setPalette] = useState(initialPallet);

  return (
    <GradientPickerPopover
      {...{
        open,
        setOpen,
        angle,
        setAngle,
        showAnglePicker: showAngle,
        showGradientTypePicker: showType,
        width: 220,
        maxStops: 3,
        paletteHeight: 32,
        palette,
        onPaletteChange: setPalette,
        gradientType,
        setGradientType,
      }}
    >
      <WrappedSketchPicker onSelect={() => {}} />
    </GradientPickerPopover>
  );
};

export default PopoverStory;
