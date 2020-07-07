import React from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Navbar from '../components/layouts/Navbar'

it('it renders username', () => {
    const { getByText } = render(<Navbar />)
    expect(getByText("Lorem ipsum")).toBeInTheDocument();
}); 

it('it renders username', () => {
    const { getByTestId } = render(<Navbar />)
    expect(getByTestId("username")).toBeInTheDocument();
}); 

it('it renders input element', () => {
    const { getByTestId } = render(<Navbar />)
    expect(getByTestId("search-input")).toBeInTheDocument();
}); 


