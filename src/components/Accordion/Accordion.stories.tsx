import type {Meta, StoryObj} from '@storybook/react';
import {Accordion} from './Accordion';
import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';



export default {
    component: Accordion
}


type Story = StoryObj<typeof Accordion>

export const FirstStory: Story = {
    args: {
        titleValue: 'Hello',
        collapsed: true,
        onClick: () => {}
    }
}

const onChangeHandler = action('onChange');

export const CollapsedAccordion = () => {
    return(
        <Accordion onClick={onChangeHandler}
                   titleValue={'Collapsed Accordion'}
                   collapsed={true}/>
    )
}

export const OpenedAccordion = () => {
    return(
        <Accordion onClick={onChangeHandler}
                   titleValue={'Opened Accordion'}
                   collapsed={false}/>
    )
}

export const AccordionDemo = () => {
    const [collapsed,setCollapsed] = useState(false)
    return(
        <Accordion onClick={()=>{setCollapsed(!collapsed)}}
                   titleValue={'Opened Accordion'}
                   collapsed={collapsed}/>
    )
}