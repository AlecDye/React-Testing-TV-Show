import React from 'react';
import { render, getByText, userEvent, debug } from '@testing-library/react';
import App from './App';

test('Dropdown menu is rendering on app component', () => {

    const { getByText } = render(<App />)

    userEvent.change(getByText(/select a season/i));
    debug()
    getByText(/season 1/i);

})

// drop down menu (with divs instead of select)
//? import userEvent from '@tasting-library/react'
//? userEvent.change(getByText(/select a season/i))
// getByText(/season 1/i);