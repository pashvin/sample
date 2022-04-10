import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HitTarget from './HitTarget';

describe('<HitTarget />', () => {
  test('it should mount', () => {
    render(<HitTarget />);
    
    const hitTarget = screen.getByTestId('HitTarget');

    expect(hitTarget).toBeInTheDocument();
  });
});