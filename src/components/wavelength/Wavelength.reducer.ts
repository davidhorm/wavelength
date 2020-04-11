interface WavelengthState {
  targetPercent: number;
  targetVisible: boolean;
  pointerPercent: number;
}

export const initialState: WavelengthState = {
  targetPercent: 0,
  targetVisible: false,
  pointerPercent: 50,
};

enum ACTION_TYPES {
  INCREMENT_POINTER = 'INCREMENT_POINTER',
  DECREMENT_POINTER = 'DECREMENT_POINTER',
  SHOW_TARGET = 'SHOW_TARGET',
  HIDE_TARGET = 'HIDE_TARGET',
  RESET_GAUGE = 'RESET_GAUGE',
}

interface TypeOnlyAction {
  type:
    | ACTION_TYPES.INCREMENT_POINTER
    | ACTION_TYPES.DECREMENT_POINTER
    | ACTION_TYPES.SHOW_TARGET
    | ACTION_TYPES.HIDE_TARGET;
}

interface SetTargetAction {
  type: ACTION_TYPES.RESET_GAUGE;
  value: number;
}

type WavelengthAction = TypeOnlyAction | SetTargetAction;

export const actionCreator = {
  incrementPointer: (): TypeOnlyAction => ({ type: ACTION_TYPES.INCREMENT_POINTER }),
  decrementPointer: (): TypeOnlyAction => ({ type: ACTION_TYPES.DECREMENT_POINTER }),
  showTarget: (): TypeOnlyAction => ({ type: ACTION_TYPES.SHOW_TARGET }),
  hideTarget: (): TypeOnlyAction => ({ type: ACTION_TYPES.HIDE_TARGET }),
  resetGauge: (): SetTargetAction => ({ type: ACTION_TYPES.RESET_GAUGE, value: Math.round(Math.random() * 100) }),
};

export const reducer = (state: WavelengthState = initialState, action: WavelengthAction): WavelengthState => {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT_POINTER:
      return { ...state, pointerPercent: Math.min(100, state.pointerPercent + 1) };
    case ACTION_TYPES.DECREMENT_POINTER:
      return { ...state, pointerPercent: Math.max(0, state.pointerPercent - 1) };
    case ACTION_TYPES.SHOW_TARGET:
      return { ...state, targetVisible: true };
    case ACTION_TYPES.HIDE_TARGET:
      return { ...state, targetVisible: false };
    case ACTION_TYPES.RESET_GAUGE:
      return {
        ...initialState,
        targetPercent: Math.min(100, Math.max(0, action.value)),
      };
    default:
      return state;
  }
};
