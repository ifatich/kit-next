// components/Button.tsx
import React, { FC, MouseEvent } from 'react';

interface ButtonProps {
    label: string;
    variant?: 'primary' | 'secondary' | 'disabled';
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const styles = {
    primary: {
        backgroundColor: '#3498db',
        color: '#fff',
    },
    secondary: {
        backgroundColor: '#2ecc71',
        color: '#fff',
    },
    disabled: {
        backgroundColor: '#dcdcdc',
        color: '#888',
        cursor: 'not-allowed',
    },
};

const Button: FC<ButtonProps> = ({ label, variant = 'primary', onClick }) => {
    const buttonStyle = styles[variant] || {};

    return (
        <button
            style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '4px', border: 'none', ...buttonStyle }}
            onClick={onClick}
            disabled={variant === 'disabled'}
        >
            {label}
        </button>
    );
};

export default Button;
