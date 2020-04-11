import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Gauge from '../gauge/Gauge';
import { actionCreator, initialState, reducer } from './Wavelength.reducer';

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
        <Button onClick={() => dispatch(actionCreator.decrementPointer())}>-</Button>
        <Button onClick={() => dispatch(actionCreator.incrementPointer())}>+</Button>
      </div>
      <div>
        <Button onClick={() => dispatch(actionCreator.resetGauge())}>RESET</Button>
        <Button onClick={() => dispatch(actionCreator.showTarget())}>SHOW</Button>
        <Button onClick={() => dispatch(actionCreator.hideTarget())}>HIDE</Button>
      </div>
    </div>
  );
};

export default Wavelength;
