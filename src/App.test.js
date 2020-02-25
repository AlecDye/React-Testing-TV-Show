import React from 'react';
import { render, getByText, userEvent, debug } from '@testing-library/react';
import App from './App';
import { fetchShow } from './api/fetchShow';

// const episodes =

test('Dropdown menu is rendering on app component', () => {
    const mockFetchShow = jest.fn("./api/fetchShow");
    const { getByText } = render(<App />)


    const getSeason = getByText(/select a season/i);
    userEvent.change(getSeason);
    // userEvent.change(getByText(/select a season/i));
    // debug()
    // getByText(/season 1/i);

})

test('Api is being fetched and rendered', async () => {

    mockFetchShow.mockResolveValueOnce(episodes);
})