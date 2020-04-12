export const initialState = {
  targetPercent: 0,
  targetVisible: false,
  pointerPercent: 50,
};

type actions =
  | ['INCREMENT_POINTER']
  | ['DECREMENT_POINTER']
  | ['SHOW_TARGET']
  | ['HIDE_TARGET']
  | ['RESET_GAUGE', number];

export const reducer = (state: typeof initialState, [actionType, payload]: actions): typeof initialState => {
  switch (actionType) {
    case 'INCREMENT_POINTER':
      return { ...state, pointerPercent: Math.min(100, state.pointerPercent + 1) };
    case 'DECREMENT_POINTER':
      return { ...state, pointerPercent: Math.max(0, state.pointerPercent - 1) };
    case 'SHOW_TARGET':
      return { ...state, targetVisible: true };
    case 'HIDE_TARGET':
      return { ...state, targetVisible: false };
    case 'RESET_GAUGE':
      return {
        ...initialState,
        targetPercent: Math.min(100, Math.max(0, payload!)),
      };
    default:
      return state;
  }
};
