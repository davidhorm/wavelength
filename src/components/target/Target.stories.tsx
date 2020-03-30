import { boolean, number, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import Target from './Target';

export default {
  title: 'Target',
  component: Target,
  decorators: [withKnobs],
};

export const knobs = () => <Target degree={number('degree', 0)} visible={boolean('visible', true)} />;
