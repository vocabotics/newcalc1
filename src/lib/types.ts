export type CalculatorState = {
  currentValue: string;
  previousValue: string;
  operation: string | null;
  clearNext: boolean;
};

export type CalculatorAction =
  | { type: 'ADD_NUMBER'; payload: string }
  | { type: 'SET_OPERATION'; payload: string }
  | { type: 'CALCULATE' }
  | { type: 'CLEAR' }
  | { type: 'DELETE' }
  | { type: 'DECIMAL' };