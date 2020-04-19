import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Gauge from '../Gauge';
import { initialState, reducer } from './reducer';

// #region Styles

const columnFlexDirection: 'column' = 'column';
const containerStyle = {
  margin: '1rem',
  display: 'flex',
  flexDirection: columnFlexDirection,
  alignItems: 'center',
};

enum GRID_AREA {
  ZERO_WORD = 'zero-word',
  HUNDRED_WORD = 'hundred-word',
  SLIDER = 'slider',
}

const sliderStyle = {
  width: '100%',
  maxWidth: '671px',
  display: 'grid',
  columnGap: '1rem',
  gridTemplate: `
    '${GRID_AREA.ZERO_WORD} ${GRID_AREA.SLIDER} ${GRID_AREA.HUNDRED_WORD}' 5rem
    / 7% auto 7%
  `,
};

// #endregion Styles

const Wavelength = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <main style={containerStyle}>
      <Typography variant="h1">Wavelength</Typography>
      <Typography variant="h2">Actual: {state.targetVisible ? state.targetPercent : '???'}</Typography>
      <Gauge
        targetDegree={(state.targetPercent * 180) / 100}
        targetVisible={state.targetVisible}
        pointerDegree={(state.pointerPercent * 180) / 100}
      />

      <section style={sliderStyle}>
        <Typography variant="subtitle2" style={{ gridArea: GRID_AREA.ZERO_WORD, justifySelf: 'left' }}>
          {state.zeroWord}
        </Typography>
        <Slider
          style={{ gridArea: GRID_AREA.SLIDER, alignSelf: 'end' }}
          valueLabelDisplay="on"
          value={state.pointerPercent}
          onChange={(event, value) => dispatch({ type: 'SET_POINTER', pointerPercent: value as number })}
        />
        <Typography variant="subtitle2" style={{ gridArea: GRID_AREA.HUNDRED_WORD, justifySelf: 'right' }}>
          {state.hundredWord}
        </Typography>
      </section>

      <ButtonGroup>
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
    </main>
  );
};

export default Wavelength;
