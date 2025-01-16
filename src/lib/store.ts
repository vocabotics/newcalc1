import { create } from 'zustand';
import { CalculatorState } from './types';

interface CalculatorStore extends CalculatorState {
  addNumber: (num: string) => void;
  setOperation: (op: string) => void;
  calculate: () => void;
  clear: () => void;
  deleteLastDigit: () => void;
  addDecimal: () => void;
}

export const useCalculatorStore = create<CalculatorStore>((set, get) => ({
  currentValue: '0',
  previousValue: '',
  operation: null,
  clearNext: false,

  addNumber: (num) => set((state) => {
    if (state.clearNext) {
      return {
        ...state,
        currentValue: num,
        clearNext: false
      };
    }
    return {
      ...state,
      currentValue: state.currentValue === '0' ? num : state.currentValue + num
    };
  }),

  setOperation: (op) => set((state) => ({
    operation: op,
    previousValue: state.currentValue,
    clearNext: true
  })),

  calculate: () => set((state) => {
    const prev = parseFloat(state.previousValue);
    const current = parseFloat(state.currentValue);
    let result = 0;

    switch (state.operation) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        result = prev / current;
        break;
      default:
        return state;
    }

    return {
      currentValue: result.toString(),
      previousValue: '',
      operation: null,
      clearNext: true
    };
  }),

  clear: () => set({
    currentValue: '0',
    previousValue: '',
    operation: null,
    clearNext: false
  }),

  deleteLastDigit: () => set((state) => ({
    currentValue: state.currentValue.length > 1 
      ? state.currentValue.slice(0, -1) 
      : '0'
  })),

  addDecimal: () => set((state) => ({
    currentValue: state.currentValue.includes('.') 
      ? state.currentValue 
      : state.currentValue + '.'
  }))
}));