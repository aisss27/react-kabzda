
import React, {useState} from 'react';
import {UncontrolledRating} from './UncontrolledRating';
import {Rating} from '../Rating/Rating';
import {action} from '@storybook/addon-actions';


export default {
  title: 'UncontrolledRating',
  component: UncontrolledRating
};


const callback = action('rating changed inside component');
export const EmptyStars = () => <UncontrolledRating onChange={callback} defaultValue={0}  />;
export const Rating1 = () => <UncontrolledRating onChange={callback} defaultValue={1}/>;
export const Rating2 = () => <UncontrolledRating onChange={callback} defaultValue={2}/>;
export const Rating3 = () => <UncontrolledRating onChange={callback} defaultValue={3}/>;
export const Rating4 = () => <UncontrolledRating onChange={callback} defaultValue={4}/>;
export const Rating5 = () => <UncontrolledRating onChange={callback} defaultValue={5}/>;