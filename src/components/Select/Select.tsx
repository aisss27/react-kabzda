import React from 'react';

type ItemType = {
    title: string
    value : any
}
type SelectType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

const Select = (props: SelectType) => {
    return (
        <div>
            <div>{}</div>
            {props.items.map(i => <div>{i.title}</div>)}
        </div>
    );
};

export default Select;