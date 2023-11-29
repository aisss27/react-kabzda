import React, {useState} from 'react';

type OnOffPropsType = {
    on: boolean
    onChange: (on:boolean) => void
}

export const OnOff = (props: OnOffPropsType) => {



const onStyle = {
    width: '40px',
    height: '40px',
    padding: '10px',
    border: '1px solid black',
    backgroundColor: props.on ? 'green' : 'white',
    display: 'inline-block',
    marginLeft: '5px'
}
    const offStyle = {
        width: '40px',
        height: '40px',
        padding: '10px',
        border: '1px solid black',
        backgroundColor: props.on ? 'white' : 'red',
        display: 'inline-block',
        marginLeft: '5px'
    }

    const indicatorStyle = {
    width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: props.on ? 'green' : 'red',
        display: 'inline-block',
        marginLeft: '5px'
    }

    return (
        <div>
            <div style={onStyle} onClick={() => {props.onChange(true)}}>On</div>
            <div style={offStyle} onClick={() => {props.onChange(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

