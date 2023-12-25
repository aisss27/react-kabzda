import React, {useState} from 'react';



type ItemsType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemsType[]
    onClick: (value:any) => void
}


export const Accordion = (props: AccordionPropsType) => {

    return (
       <div>
          <AccordionTitle onChange={props.onChange}  title={props.titleValue}/>
           {!props.collapsed && <AccordionBody onClick={props.onClick} items={props.items} />}
       </div>
    );
};
type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}
function AccordionTitle(props: AccordionTitlePropsType) {
    return(
        <h3 onChange={props.onChange}>{props.title}</h3>
    )
}

type AccordionBodyType = {
    items: ItemsType[]
    onClick: (value: any) => void
}
function AccordionBody(props: AccordionBodyType) {
    return(
        <ul>
            {props.items.map((i,index) => <li onClick={() => {props.onClick(i.value)}} key={index}>{i.title}</li>)}
        </ul>
    )
}

