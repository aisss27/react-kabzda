import React, {useState} from 'react';
import {Select} from './Select';
import {action} from '@storybook/addon-actions';

export default {
    component: Select
}

export const withValue = () => {
const [value, setValue] = useState("2")
    return(
        <>
        <Select value={value}
                onChange={setValue}
                items={[
                    {value: "1",title: "Karaganda"},
                    {value: "2",title: "Astana"},
                    {value: "3",title: "Almaty"},
                ]}
        />
        </>
    )
}

export const withoutValue = () => {
    const [value, setValue] = useState(null)
    return(
        <Select
                onChange={setValue}
                value={value}
                items={[
                    {value: "1",title: "Karaganda"},
                    {value: "2",title: "Astana"},
                    {value: "3",title: "Almaty"},
                ]}
        />
    )
}