import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom'
import Main from '../dashboard/Main'
import axios from 'axios';

jest.mock('axios');

it("renders main component ", () => {
    const { getByTestId, debug } = render(<Main />)
    debug()
    // expect(getByTestId("next-btn")).toHaveTextContent("Next");
});

