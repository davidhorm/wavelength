import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Gauge from '../gauge/Gauge';
import { initialState, reducer } from './Wavelength.reducer';

enum GRID_AREA {
  TOP = 'top',
  GAUGE = 'gauge',
  SLIDER = 'slider',
  ZERO_WORD = 'zero-word',
  HUNDRED_WORD = 'hundred-word',
  BOTTOM = 'bottom',
}

const containerStyle = {
  display: 'grid',
  gridTemplateColumns: 'auto 45px 554px 40px auto',
  gridTemplateRows: 'auto auto 70px auto',
  gridGap: '1rem',
  gridTemplateAreas: `
    '. .                      ${GRID_AREA.TOP}    .                         .'
    '. ${GRID_AREA.GAUGE}     ${GRID_AREA.GAUGE}  ${GRID_AREA.GAUGE}        .'
    '. ${GRID_AREA.ZERO_WORD} ${GRID_AREA.SLIDER} ${GRID_AREA.HUNDRED_WORD} .'
    '. .                      ${GRID_AREA.BOTTOM} .                         .'
  `,
};

const Wavelength = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <div style={containerStyle}>
      <header style={{ gridArea: GRID_AREA.TOP }}>
        <Typography variant="h1">Wavelength</Typography>
        <Typography variant="h2">Actual: {state.targetVisible ? state.targetPercent : '???'}</Typography>
      </header>

      <Gauge
        style={{ gridArea: GRID_AREA.GAUGE }}
        targetDegree={(state.targetPercent * 180) / 100}
        targetVisible={state.targetVisible}
        pointerDegree={(state.pointerPercent * 180) / 100}
      />

      <Typography style={{ gridArea: GRID_AREA.ZERO_WORD }} variant="subtitle2">
        {state.zeroWord}
      </Typography>
      <Slider
        style={{ gridArea: GRID_AREA.SLIDER, alignSelf: 'end' }}
        valueLabelDisplay="on"
        value={state.pointerPercent}
        onChange={(event, value) => dispatch({ type: 'SET_POINTER', pointerPercent: value as number })}
      />
      <Typography style={{ gridArea: GRID_AREA.HUNDRED_WORD }} variant="subtitle2">
        {state.hundredWord}
      </Typography>

      <ButtonGroup style={{ gridArea: GRID_AREA.BOTTOM, justifySelf: 'center' }}>
        <Button onClick={() => dispatch({ type: 'RESET_GAUGE', targetPercent: Math.round(Math.random() * 100) })}>
          RESET
        </Button>
        <Button
          onMouseDown={() => dispatch({ type: 'PEAK_TARGET', isMouseEvent: true })}
          onMouseUp={() => dispatch({ type: 'HIDE_TARGET' })}
          onTouchStart={() => dispatch({ type: 'PEAK_TARGET', isMouseEvent: false })}
          onTouchEnd={() => dispatch({ type: 'HIDE_TARGET' })}
        >
          PEAK
        </Button>
        <Button onClick={() => dispatch({ type: 'SHOW_TARGET' })}>REVEAL</Button>
      </ButtonGroup>
    </div>
  );
};

export default Wavelength;
