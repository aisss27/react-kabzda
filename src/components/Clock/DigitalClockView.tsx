import React from 'react';
import {ClockViewProps} from './Clock';

export function get2digitsString(number: number) {
    return number < 10 ? '0' + number : number;
}

export const DigitalClockView:React.FC<ClockViewProps> = ({date}) => {
    return <>
        <span>{get2digitsString(date.getHours())}</span>
        :
        <span>{get2digitsString(date.getMinutes())}</span>
        :
        <span>{get2digitsString(date.getSeconds())}</span>
    </>
}


