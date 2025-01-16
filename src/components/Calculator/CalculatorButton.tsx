import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface CalculatorButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'outline' | 'ghost';
  className?: string;
}

export const CalculatorButton = ({
  onClick,
  children,
  variant = 'default',
  className = ''
}: CalculatorButtonProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        variant={variant}
        onClick={onClick}
        className={`w-full h-14 text-xl font-medium ${className}`}
      >
        {children}
      </Button>
    </motion.div>
  );
};