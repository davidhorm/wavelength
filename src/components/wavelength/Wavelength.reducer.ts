export const initialState = {
  targetPercent: 0,
  targetVisible: false,
  pointerPercent: 50,
};

export enum ACTION_TYPES {
  INCREMENT_POINTER = 'INCREMENT_POINTER',
  DECREMENT_POINTER = 'DECREMENT_POINTER',
  SHOW_TARGET = 'SHOW_TARGET',
  HIDE_TARGET = 'HIDE_TARGET',
  RESET_GAUGE = 'RESET_GAUGE',
}

type actions =
  | [ACTION_TYPES.INCREMENT_POINTER]
  | [ACTION_TYPES.DECREMENT_POINTER]
  | [ACTION_TYPES.SHOW_TARGET]
  | [ACTION_TYPES.HIDE_TARGET]
  | [ACTION_TYPES.RESET_GAUGE, number];

export const reducer = (state: typeof initialState, [actionType, payload]: actions): typeof initialState => {
  switch (actionType) {
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
        targetPercent: Math.min(100, Math.max(0, payload!)),
      };
    default:
      return state;
  }
};
