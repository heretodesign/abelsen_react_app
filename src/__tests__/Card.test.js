import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Card from '../components/shared/Card'

it('it renders loading', () => {
    const { getByTestId, debug } = render(<Card />)
    debug()
    // const element = getByTestId(/loading.../i)
    // expect(element).toBeInTheDocument();
}); 

