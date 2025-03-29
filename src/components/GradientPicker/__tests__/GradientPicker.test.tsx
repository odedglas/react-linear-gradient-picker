import { render, screen } from '@testing-library/react';
import React from 'react';

import GradientPicker from '../index';

describe('GradientPicker', () => {
  it('renders without crashing', () => {
    const defaultProps = {
      width: 300,
      height: 32,
      palette: [
        { id: 1, color: '#ff0000', offset: 0, opacity: 1 },
        { id: 2, color: '#0000ff', offset: 1, opacity: 1 },
      ],
      onPaletteChange: jest.fn(),
      onColorStopSelect: jest.fn(),
    };

    render(<GradientPicker {...defaultProps} />);
    expect(screen.getByTestId('gradient-picker')).toBeInTheDocument();
  });
});
