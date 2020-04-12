import copy from 'copy-to-clipboard';

export const initialState = {
  targetPercent: 0,
  targetVisible: false,
  pointerPercent: 50,
};

type actions = ['SET_POINTER', number] | ['SHOW_TARGET'] | ['PEAK_TARGET'] | ['HIDE_TARGET'] | ['RESET_GAUGE', number];

export const reducer = (state: typeof initialState, [actionType, payload]: actions): typeof initialState => {
  switch (actionType) {
    case 'SET_POINTER':
      return {
        ...state,
        pointerPercent: Math.min(100, Math.max(0, payload!)),
      };
    case 'SHOW_TARGET':
      return { ...state, targetVisible: true };
    case 'PEAK_TARGET': {
      copy(state.targetPercent.toString());
      return {
        ...state,
        targetVisible: true,
      };
    }
    case 'HIDE_TARGET':
      return { ...state, targetVisible: false };
    case 'RESET_GAUGE': {
      const targetValue = payload?.toString() || '';
      copy(targetValue);
      return {
        ...initialState,
        targetPercent: Math.min(100, Math.max(0, payload!)),
      };
    }
    default:
      return state;
  }
};
