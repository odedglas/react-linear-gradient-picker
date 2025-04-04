import React, { useRef } from 'react';
import { centerOffset, clampAngle, snapAngle, pointDegrees } from '../../lib';
import useDragging from '../hooks/useDragging';
import './index.scss';

interface AnglePickerProps {
  angle: number;
  setAngle: (angle: number) => void;
  size?: number;
  snap?: number;
}

const AnglePicker: React.FC<AnglePickerProps> = ({ angle, setAngle, size = 24, snap = 5 }) => {
  const pickerRef = useRef<HTMLDivElement>(null);
  const sizeStyle = { height: size, width: size };

  const onAngleChange = ({ clientX, clientY }: { clientX: number; clientY: number }, useSnap = false) => {
    if (!pickerRef.current) return;

    const center = centerOffset(pickerRef.current);
    const degrees = pointDegrees(clientX, clientY, center);

    const clamped = clampAngle(degrees);
    const angle = useSnap ? snapAngle(clamped, snap) : clamped;

    setAngle(angle);
  };

  const [dragHandler] = useDragging({
    onDragStart: e => onAngleChange(e, true),
    onDrag: onAngleChange,
    onDragEnd: coords => {
      if (coords) {
        onAngleChange(coords, true);
      }
    },
  });

  return (
    <>
      <div className="ap" ref={pickerRef} onMouseDown={dragHandler} onTouchStart={dragHandler} style={sizeStyle}>
        <span className="apc" style={{ transform: `rotate(${angle}deg)`, height: size }}>
          <i className="aph" />
        </span>
      </div>
      <div className="ai">
        <span onClick={() => setAngle(angle - 1)}>&#8722;</span>
        <input value={`${angle}°`} disabled />
        <span onClick={() => setAngle(angle + 1)}>&#43;</span>
      </div>
    </>
  );
};

export default AnglePicker;
