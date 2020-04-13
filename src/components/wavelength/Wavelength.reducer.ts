import copy from 'copy-to-clipboard';
import antonyms from './antonyms';

export const initialState = {
  targetPercent: 0,
  targetVisible: false,
  pointerPercent: 50,
  zeroWord: 'RESET',
  hundredWord: 'RESET',
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
      // Copy target value to clip board
      const targetValue = payload?.toString() || '';
      copy(targetValue);

      // Get new antonyms
      const antonymIndex = Math.round(Math.random() * antonyms.length);
      const [zeroWord, hundredWord] = antonyms[antonymIndex];

      return {
        ...initialState,
        targetPercent: Math.min(100, Math.max(0, payload!)),
        zeroWord,
        hundredWord,
      };
    }
    default:
      return state;
  }
};
