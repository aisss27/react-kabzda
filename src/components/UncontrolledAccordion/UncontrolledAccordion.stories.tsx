import type {Meta, StoryObj} from '@storybook/react';
import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {UncontrolledAccordion1} from './UncontrolledAccordion1';



export default {
    component: UncontrolledAccordion1
}

export const UncontrolledAccordionOpen = () => {
    return <UncontrolledAccordion1 titleValue={'Accordion'} />
}



export const UncontrolledAccordionDemo = () => {
    return <UncontrolledAccordion1 titleValue={'Accordion'} />
}