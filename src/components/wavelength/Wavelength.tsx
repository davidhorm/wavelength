import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Gauge from '../gauge/Gauge';
import { ACTION_TYPES, initialState, reducer } from './Wavelength.reducer';

const Wavelength = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <div>
      <Typography variant="h1">Wavelength</Typography>
      <Typography variant="h2">Guess: {state.pointerPercent}</Typography>
      <Typography variant="h2">Actual: {state.targetVisible ? state.targetPercent : '???'}</Typography>
      <Gauge
        targetDegree={(state.targetPercent * 180) / 100}
        targetVisible={state.targetVisible}
        pointerDegree={(state.pointerPercent * 180) / 100}
      />
      <div>
        <Button onClick={() => dispatch([ACTION_TYPES.DECREMENT_POINTER])}>-</Button>
        <Button onClick={() => dispatch([ACTION_TYPES.INCREMENT_POINTER])}>+</Button>
      </div>
      <div>
        <Button onClick={() => dispatch([ACTION_TYPES.RESET_GAUGE, Math.round(Math.random() * 100)])}>RESET</Button>
        <Button onClick={() => dispatch([ACTION_TYPES.SHOW_TARGET])}>SHOW</Button>
        <Button onClick={() => dispatch([ACTION_TYPES.HIDE_TARGET])}>HIDE</Button>
      </div>
    </div>
  );
};

export default Wavelength;
