
import { action } from '@storybook/addon-actions';
import React, {useState} from 'react';
import {UncontrolledOnOff} from './UncontrolledOnOff';


export default {
  title: 'Uncontrolled OnOff',
  component: UncontrolledOnOff
};

const callback = action('on or off clicked');

export const OnMode = () => <UncontrolledOnOff onChange={callback} defaultOn={true}/>;
export const OffMode = () => <UncontrolledOnOff onChange={callback} defaultOn={false}/>;



