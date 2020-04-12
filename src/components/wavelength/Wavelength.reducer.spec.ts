import { reducer } from './Wavelength.reducer';

describe('Wavelength reducer', () => {
  it(`shouldn't allow resetting the targetPercent state below 0`, () => {
    const initialState = {
      targetPercent: 88,
      targetVisible: true,
      pointerPercent: 47,
    };

    const expectedState = { targetPercent: 0, targetVisible: false, pointerPercent: 50 };

    const actualState = reducer(initialState, ['RESET_GAUGE', -1]);

    expect(expectedState).toEqual(actualState);
  });

  it(`shouldn't allow resetting the targetPercent state above 100`, () => {
    const initialState = {
      targetPercent: 88,
      targetVisible: true,
      pointerPercent: 47,
    };

    const expectedState = { targetPercent: 100, targetVisible: false, pointerPercent: 50 };

    const actualState = reducer(initialState, ['RESET_GAUGE', 101]);

    expect(expectedState).toEqual(actualState);
  });

  describe('actionCreator.incrementPointer', () => {
    it('should increment pointer value by 1', () => {
      const initialState = {
        targetPercent: 56,
        targetVisible: false,
        pointerPercent: 78,
      };

      const expectedState = { ...initialState, pointerPercent: 79 };

      const actualState = reducer(initialState, ['INCREMENT_POINTER']);

      expect(expectedState).toEqual(actualState);
    });

    it(`shouldn't increment pointer value pass 100`, () => {
      const initialState = {
        targetPercent: 46,
        targetVisible: false,
        pointerPercent: 100,
      };

      const expectedState = { ...initialState };

      const actualState = reducer(initialState, ['INCREMENT_POINTER']);

      expect(expectedState).toEqual(actualState);
    });
  });

  describe('actionCreator.decrementPointer', () => {
    it('should decrement pointer value by 1', () => {
      const initialState = {
        targetPercent: 97,
        targetVisible: true,
        pointerPercent: 63,
      };

      const expectedState = { ...initialState, pointerPercent: 62 };

      const actualState = reducer(initialState, ['DECREMENT_POINTER']);

      expect(expectedState).toEqual(actualState);
    });

    it(`shouldn't decrement pointer value below 0`, () => {
      const initialState = {
        targetPercent: 63,
        targetVisible: false,
        pointerPercent: 0,
      };

      const expectedState = { ...initialState };

      const actualState = reducer(initialState, ['DECREMENT_POINTER']);

      expect(expectedState).toEqual(actualState);
    });
  });

  describe('actionCreator.showTarget', () => {
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

  describe('actionCreator.hideTarget', () => {
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

  describe('actionCreator.resetGauge', () => {
    it('should set to default initial state with a random target percent', () => {
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
  });
});
