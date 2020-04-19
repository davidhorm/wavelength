import copy from 'copy-to-clipboard';
import antonyms from './resources/antonyms';

export const initialState = {
  targetPercent: 0,
  targetVisible: false,
  pointerPercent: 50,
  zeroWord: 'RESET',
  hundredWord: 'RESET',
};

type actions =
  | { type: 'SET_POINTER'; pointerPercent: number }
  | { type: 'SHOW_TARGET' }
  | { type: 'PEAK_TARGET'; isMouseEvent: boolean }
  | { type: 'HIDE_TARGET' }
  | { type: 'RESET_GAUGE'; targetPercent: number };

export const reducer = (state: typeof initialState, action: actions): typeof initialState => {
  switch (action.type) {
    case 'SET_POINTER':
      return {
        ...state,
        pointerPercent: Math.min(100, Math.max(0, action.pointerPercent)),
      };
    case 'SHOW_TARGET':
      return { ...state, targetVisible: true };
    case 'PEAK_TARGET': {
      action.isMouseEvent && copy(state.targetPercent.toString());
      return {
        ...state,
        targetVisible: true,
      };
    }
    case 'HIDE_TARGET':
      return { ...state, targetVisible: false };
    case 'RESET_GAUGE': {
      // Copy target value to clip board
      copy(action.targetPercent.toString());

      // Get new antonyms
      const antonymIndex = Math.round(Math.random() * antonyms.length) - 1;
      const [zeroWord, hundredWord] = antonyms[antonymIndex];

      return {
        ...initialState,
        targetPercent: Math.min(100, Math.max(0, action.targetPercent)),
        zeroWord,
        hundredWord,
      };
    }
    default:
      return state;
  }
};
