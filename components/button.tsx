import React from 'react';
import styles from './button.module.css';
import cn from '@/public/lib/cn';

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  disabled = false,
  className,
  type = 'button',
}) => {
  return (
    <div
      className={cn(
        'relative h-10 w-[120px] overflow-hidden rounded-full bg-black',
        className,
        styles['gradient-border'],
      )}
      onClick={onClick}
    >
      <button
        type={type}
        className={cn(
          `flex w-fit items-center justify-center gap-5 rounded-full border px-4 py-2 text-md shadow-md transition-all`,
          disabled
            ? 'cursor-not-allowed border-gray-500 bg-gradient-to-r from-[#626262]/40 to-[#494949]/10 text-gray-500'
            : 'border-white/50 bg-gradient-to-r from-[#626262]/40 to-[#494949]/10 text-white',
          styles['custom-btn'],
        )}
        disabled={disabled}
      >
        <span className="text-white">{children}</span>
      </button>
    </div>
  );
};

export default Button;
