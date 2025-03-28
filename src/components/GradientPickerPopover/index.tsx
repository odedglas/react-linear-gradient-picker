import React, { useState } from 'react';
import { getGradientPreview } from '../../lib';
import AnglePicker from '../AnglePicker';
import GradientPicker from '../GradientPicker';
import GradientTypePicker from '../GradientTypePicker';
import { GRADIENT_TYPES, GradientType } from '../GradientTypePicker/types';
import { GradientPickerPopoverProps } from './types';
import './index.scss';

const defaultTrigger = (background: string, togglePicker: () => void): React.ReactElement => (
  <div className="trigger" onClick={togglePicker}>
    <div className="inner" style={{ background }} />
  </div>
);

const GradientPickerPopover: React.FC<GradientPickerPopoverProps> = ({
  palette,
  open = false,
  setOpen,
  trigger = defaultTrigger,
  showAnglePicker = true,
  showGradientTypePicker = true,
  angle = 0,
  setAngle = () => {},
  gradientType: controlledGradientType,
  setGradientType: setControlledGradientType,
  onPaletteChange,
  ...gradientPickerProps
}) => {
  const [internalGradientType, setInternalGradientType] = useState<GradientType>(GRADIENT_TYPES.LINEAR);
  const gradientType = controlledGradientType || internalGradientType;
  const handleGradientTypeChange = (type: GradientType): void => {
    if (setControlledGradientType) {
      setControlledGradientType(type);
    } else {
      setInternalGradientType(type);
    }
  };

  const togglePicker = (): void => setOpen(!open);
  const { background } = getGradientPreview(palette, angle, gradientType);

  const showControlPanel = showGradientTypePicker || showAnglePicker;
  const supportsAnglePicker = gradientType === GRADIENT_TYPES.LINEAR;

  return (
    <div className="gpw">
      {trigger(background, togglePicker)}
      {open && (
        <>
          <div className="overlay" onClick={() => setOpen(false)} />
          <div className="popover">
            {showControlPanel && (
              <div className="controls-wrapper">
                <GradientTypePicker gradientType={gradientType} onGradientTypeChange={handleGradientTypeChange} />
                {showAnglePicker && supportsAnglePicker && <AnglePicker angle={angle} setAngle={setAngle} size={28} />}
              </div>
            )}
            <GradientPicker {...gradientPickerProps} palette={palette} flatStyle onPaletteChange={onPaletteChange} />
          </div>
        </>
      )}
    </div>
  );
};

export { GRADIENT_TYPES };
export default GradientPickerPopover;
