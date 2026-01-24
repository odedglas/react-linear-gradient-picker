import { default as React } from 'react';
interface AnglePickerProps {
    angle: number;
    setAngle: (angle: number) => void;
    size?: number;
    snap?: number;
}
declare const AnglePicker: React.FC<AnglePickerProps>;
export default AnglePicker;
