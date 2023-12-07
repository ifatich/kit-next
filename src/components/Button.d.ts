// components/Button.d.ts
import { FC, MouseEvent } from 'react';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'disabled';
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

declare const Button: FC<ButtonProps>;

export default Button;
