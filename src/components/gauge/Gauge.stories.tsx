import { boolean, number, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import Gauge from './Gauge';

export default {
  title: 'Gauge',
  component: Gauge,
  decorators: [withKnobs],
};

export const knobs = () => (
  <Gauge
    targetDegree={number('Target Degree', 0)}
    pointerDegree={number('Pointer Degree', 0)}
    targetVisible={boolean('Target Visible', true)}
  />
);

export const defaultProps = () => <Gauge />;

export const differentAngles = () => <Gauge targetDegree={45} pointerDegree={115} />;

export const hiddenTarget = () => <Gauge targetVisible={false} />;
