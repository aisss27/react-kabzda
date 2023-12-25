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
        onClick: () => {
        }
    }
}

const onChangeHandler = action('onChange');
export const users = [
    {title: 'Ais', value: 1},
    {title: 'Arman', value: 2},
    {title: 'Nariman', value: 3},
    {title: 'Amina', value: 4},
    {title: 'Nurassem', value: 5},
    {title: 'Ali', value: 6},
    {title: 'Nurba', value: 7},
];

const onClickCallback = action('some item was clicked');

export const CollapsedAccordion = () => {
    return (
        <Accordion onChange={onChangeHandler}
                   titleValue={'Collapsed Accordion'}
                   collapsed={true}
                   items={users}
                   onClick={onClickCallback}
        />
    )
}

export const OpenedAccordion = () => {
    return (
        <Accordion onChange={onChangeHandler}
                   titleValue={'Opened Accordion'}
                   collapsed={false}
                   items={users}
                   onClick={onClickCallback}
        />
    )
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <Accordion onChange={() => {setCollapsed(!collapsed)}}
                   titleValue={'Controlling Accordion'}
                   collapsed={collapsed}
                   items={[
                   {title: 'Ais', value: 1},
                   {title: 'Arman', value: 2},
                   {title: 'Nariman', value: 3},
                   {title: 'Amina', value: 4},
                   {title: 'Nurassem', value: 5},
                   {title: 'Ali', value: 6},
                   {title: 'Nurba', value: 7}
        ]}
                   onClick={(value) => alert(`User with id ${value} was called`)}
        />
    )
}