import { reducer } from './Wavelength.reducer';

describe('Wavelength reducer', () => {
  describe('SET_POINTER action', () => {
    it('should set to default initial state with specified target percent', () => {
      const initialState = {
        targetPercent: 56,
        targetVisible: false,
        pointerPercent: 78,
      };

      const expectedState = { ...initialState, pointerPercent: 43 };

      const actualState = reducer(initialState, ['SET_POINTER', 43]);

      expect(expectedState).toEqual(actualState);
    });

    it(`shouldn't allow setting the targetPercent state below 0`, () => {
      const initialState = {
        targetPercent: 63,
        targetVisible: false,
        pointerPercent: 59,
      };

      const expectedState = { ...initialState, pointerPercent: 0 };

      const actualState = reducer(initialState, ['SET_POINTER', -1]);

      expect(expectedState).toEqual(actualState);
    });

    it(`shouldn't allow setting the targetPercent state above 100`, () => {
      const initialState = {
        targetPercent: 100,
        targetVisible: false,
        pointerPercent: 46,
      };

      const expectedState = { ...initialState, pointerPercent: 100 };

      const actualState = reducer(initialState, ['SET_POINTER', 101]);

      expect(expectedState).toEqual(actualState);
    });
  });

  describe('SHOW_TARGET action', () => {
    it('should set targetVisible to true', () => {
      const initialState = {
        targetPercent: 31,
        targetVisible: false,
        pointerPercent: 16,
      };

      const expectedState = { ...initialState, targetVisible: true };

      const actualState = reducer(initialState, ['SHOW_TARGET']);

      expect(expectedState).toEqual(actualState);
    });
  });

  describe('PEAK_TARGET action', () => {
    it('should set targetVisible to true', () => {
      const initialState = {
        targetPercent: 23,
        targetVisible: false,
        pointerPercent: 96,
      };

      const expectedState = { ...initialState, targetVisible: true };

      const actualState = reducer(initialState, ['PEAK_TARGET']);

      expect(expectedState).toEqual(actualState);
    });
  });

  describe('HIDE_TARGET action', () => {
    it('should set targetVisible to false', () => {
      const initialState = {
        targetPercent: 95,
        targetVisible: true,
        pointerPercent: 70,
      };

      const expectedState = { ...initialState, targetVisible: false };

      const actualState = reducer(initialState, ['HIDE_TARGET']);

      expect(expectedState).toEqual(actualState);
    });
  });

  describe('RESET_GAUGE action', () => {
    it('should set to default initial state with specified target percent', () => {
      const initialState = {
        targetPercent: 21,
        targetVisible: true,
        pointerPercent: 38,
      };

      const actualState = reducer(initialState, ['RESET_GAUGE', 42]);

      expect(actualState.pointerPercent).toBe(50);
      expect(actualState.targetVisible).toBe(false);
      expect(actualState.targetPercent).toBe(42);
    });

    it(`shouldn't allow setting the targetPercent state below 0`, () => {
      const initialState = {
        targetPercent: 88,
        targetVisible: true,
        pointerPercent: 47,
      };

      const expectedState = { targetPercent: 0, targetVisible: false, pointerPercent: 50 };

      const actualState = reducer(initialState, ['RESET_GAUGE', -1]);

      expect(expectedState).toEqual(actualState);
    });

    it(`shouldn't allow setting the targetPercent state above 100`, () => {
      const initialState = {
        targetPercent: 93,
        targetVisible: true,
        pointerPercent: 91,
      };

      const expectedState = { targetPercent: 100, targetVisible: false, pointerPercent: 50 };

      const actualState = reducer(initialState, ['RESET_GAUGE', 101]);

      expect(expectedState).toEqual(actualState);
    });
  });
});
