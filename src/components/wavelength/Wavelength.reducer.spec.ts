import { actionCreator, reducer } from './Wavelength.reducer';

describe('Wavelength reducer', () => {
  it(`shouldn't mutate state if no valid action given`, () => {
    const initialState = {
      targetPercent: 12,
      targetVisible: true,
      pointerPercent: 34,
    };

    const expectedState = { ...initialState };

    const actualState = reducer(initialState, { type: 'fake action' });

    expect(expectedState).toEqual(actualState);
  });

  it('should provide default state if no initial state passed in', () => {
    const newState = reducer(undefined, { type: 'fake action' });
    expect(newState.targetPercent).toBeDefined();
    expect(newState.targetVisible).toBeDefined();
    expect(newState.pointerPercent).toBeDefined();
  });

  it(`shouldn't allow resetting the targetPercent state below 0`, () => {
    const initialState = {
      targetPercent: 88,
      targetVisible: true,
      pointerPercent: 47,
    };

    const expectedState = { targetPercent: 0, targetVisible: false, pointerPercent: 50 };

    const actualState = reducer(initialState, { type: 'RESET_GAUGE', value: -1 });

    expect(expectedState).toEqual(actualState);
  });

  it(`shouldn't allow resetting the targetPercent state above 100`, () => {
    const initialState = {
      targetPercent: 88,
      targetVisible: true,
      pointerPercent: 47,
    };

    const expectedState = { targetPercent: 100, targetVisible: false, pointerPercent: 50 };

    const actualState = reducer(initialState, { type: 'RESET_GAUGE', value: 101 });

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

      const actualState = reducer(initialState, actionCreator.incrementPointer());

      expect(expectedState).toEqual(actualState);
    });

    it(`shouldn't increment pointer value pass 100`, () => {
      const initialState = {
        targetPercent: 46,
        targetVisible: false,
        pointerPercent: 100,
      };

      const expectedState = { ...initialState };

      const actualState = reducer(initialState, actionCreator.incrementPointer());

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

      const actualState = reducer(initialState, actionCreator.decrementPointer());

      expect(expectedState).toEqual(actualState);
    });

    it(`shouldn't decrement pointer value below 0`, () => {
      const initialState = {
        targetPercent: 63,
        targetVisible: false,
        pointerPercent: 0,
      };

      const expectedState = { ...initialState };

      const actualState = reducer(initialState, actionCreator.decrementPointer());

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

      const actualState = reducer(initialState, actionCreator.showTarget());

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

      const actualState = reducer(initialState, actionCreator.hideTarget());

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

      const randomSpy = jest.spyOn(Math, 'random');
      const actualState = reducer(initialState, actionCreator.resetGauge());

      expect(actualState.pointerPercent).toBe(50);
      expect(actualState.targetVisible).toBe(false);
      expect(actualState.targetPercent).toBeGreaterThanOrEqual(0);
      expect(actualState.targetPercent).toBeLessThanOrEqual(100);
      expect(randomSpy).toHaveBeenCalled();
    });
  });
});
