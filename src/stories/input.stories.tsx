import React, {ChangeEvent, useRef, useState} from 'react';
import { action } from '@storybook/addon-actions';
import {Simulate} from 'react-dom/test-utils';
import input = Simulate.input;

export default {
    title: 'Input',

};

export const UncontrolledInput = () => <input/>;
export const TrackValueOfUncontrolledInput = () => {
 const [value,setValue] = useState("")
    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
        const actualValue =  e.currentTarget.value;
        setValue(actualValue);
    }
   return (
       <>
       <input value={value} onChange={onChange}/> - {value}
       </>
)
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value,setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null);
    const onClick = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return (
        <>
            <input ref={inputRef}/> <button onClick={onClick}>save</button> - actual value: {value}
        </>
    )
}


export const ContorlledInput = () => {
    const [parentValue,setParentValue] = useState('');
    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        setParentValue(newValue)
    }
    return (
        <>
        <input value={parentValue} onChange={onChange}/>
        </>
    )
}

export const ContorlledCheckbox = () => {
    const [parentValue,setParentValue] = useState(true);
    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.checked;
        setParentValue(newValue)
    }
    return (
        <>
            <input type={'checkbox'} checked={parentValue} onChange={onChange}/>
        </>
    )
}

export const ContorlledSelect = () => {
    const [parentValue,setParentValue] = useState<string | undefined>("2");
    const onChange = (e:ChangeEvent<HTMLSelectElement>) => {
        const newValue = e.currentTarget.value;
        setParentValue(newValue)
        console.log(newValue);
    }
    return (
        <>
            <select value={parentValue} onChange={onChange}>
                <option>none</option>
                <option value={'1'}>Karaganda</option>
                <option value={'2'}>Astana</option>
                <option value={'3'}>Almaty</option>
            </select>
        </>
    )
}