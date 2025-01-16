import { useCalculatorStore } from '@/lib/store';
import { CalculatorButton } from './CalculatorButton';
import { CalculatorDisplay } from './CalculatorDisplay';
import { Card, CardContent } from '@/components/ui/card';

export const Calculator = () => {
  const {
    currentValue,
    addNumber,
    setOperation,
    calculate,
    clear,
    deleteLastDigit,
    addDecimal
  } = useCalculatorStore();

  return (
    <Card className="w-[320px] p-4 shadow-lg">
      <CardContent className="p-0">
        <CalculatorDisplay value={currentValue} />
        
        <div className="grid grid-cols-4 gap-2">
          <CalculatorButton onClick={clear} variant="secondary">C</CalculatorButton>
          <CalculatorButton onClick={deleteLastDigit} variant="secondary">DEL</CalculatorButton>
          <CalculatorButton onClick={() => setOperation('/')} variant="secondary">÷</CalculatorButton>
          <CalculatorButton onClick={() => setOperation('*')} variant="secondary">×</CalculatorButton>

          {['7', '8', '9'].map((num) => (
            <CalculatorButton key={num} onClick={() => addNumber(num)}>{num}</CalculatorButton>
          ))}
          <CalculatorButton onClick={() => setOperation('-')} variant="secondary">-</CalculatorButton>

          {['4', '5', '6'].map((num) => (
            <CalculatorButton key={num} onClick={() => addNumber(num)}>{num}</CalculatorButton>
          ))}
          <CalculatorButton onClick={() => setOperation('+')} variant="secondary">+</CalculatorButton>

          {['1', '2', '3'].map((num) => (
            <CalculatorButton key={num} onClick={() => addNumber(num)}>{num}</CalculatorButton>
          ))}
          <CalculatorButton 
            onClick={calculate}
            variant="secondary"
            className="row-span-2"
          >=</CalculatorButton>

          <CalculatorButton 
            onClick={() => addNumber('0')}
            className="col-span-2"
          >0</CalculatorButton>
          <CalculatorButton onClick={addDecimal}>.</CalculatorButton>
        </div>
      </CardContent>
    </Card>
  );
};