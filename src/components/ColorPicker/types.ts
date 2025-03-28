export interface Color {
  value: string;
  name: string;
}

export interface ColorPickerProps {
  color: string;
  onSelect: (color: string) => void;
} 