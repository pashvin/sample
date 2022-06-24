import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const {container} = render(<App />);
  let combo = container.getElementsByClassName('LangInput');
  expect(combo.length).toBe(1);
});
