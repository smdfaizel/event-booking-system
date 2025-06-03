import React from 'react';
import { render } from '@testing-library/react';
import Clock from './Clock';
describe("Clock Component", () => {

    const renderClock = (props) => {
        return render(<Clock {...props}/>)
    }

    it("renders the Clock component with default position", () => {
        const {getByTestId} = renderClock();     
        // Check if the clock is rendered
        const clockElement = getByTestId('digital-clock');
        expect(clockElement).toBeInTheDocument();
        const className = clockElement.getAttribute('class');
        expect(className).toContain('text-center');
    });

    it("render the clock component with left position", () => {
        const {getByTestId,} = renderClock({ position: 'left' });     
        // Check if the clock is rendered
        const clockElement = getByTestId('digital-clock');
        expect(clockElement).toBeInTheDocument();

        const className = clockElement.getAttribute('class');
        expect(className).toContain('text-left');

    });
});