import React, {useState} from 'react';

type UncontrolledOnOffType = {
    onChange: (on: boolean) => void
    defaultOn? : boolean
}
export const UncontrolledOnOff = (props: UncontrolledOnOffType) => {
    const [on,setOn] = useState(props.defaultOn ? props.defaultOn : false);


const onStyle = {
    width: '40px',
    height: '40px',
    padding: '10px',
    border: '1px solid black',
    backgroundColor: on ? 'green' : 'white',
    display: 'inline-block',
    marginLeft: '5px'
}
    const offStyle = {
        width: '40px',
        height: '40px',
        padding: '10px',
        border: '1px solid black',
        backgroundColor: on ? 'white' : 'red',
        display: 'inline-block',
        marginLeft: '5px'
    }

    const indicatorStyle = {
    width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: on ? 'green' : 'red',
        display: 'inline-block',
        marginLeft: '5px'
    }

    return (
        <div>
            <div style={onStyle} onClick={() => setOn(true)}>On</div>
            <div style={offStyle} onClick={() => setOn(false)}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

