import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import SideBar from '../dashboard/Sidebar';

test('renders sidebar section', () => {
    const { getByText } = render(<SideBar />);
    const linkElement = getByText(/Api Application/i);
    expect(linkElement).toBeInTheDocument();
});

it('it renders sidebar title', () => {
    const { getByTestId } = render(<SideBar />)
    expect(getByTestId("sidebar-title")).toHaveTextContent("Westeros");
}); 

it('it renders sidebar title', () => {
    const { getByTestId } = render(<SideBar />)
    expect(getByTestId("sidebar-title")).toBeInTheDocument();
}); 
