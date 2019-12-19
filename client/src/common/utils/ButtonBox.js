import React from 'react';
import { Button } from 'reactstrap';

const ButtonBox = ({ disabled, type, color, onClick, className, text, variant }) => (
    <div>
        <Button variant={variant} disabled={disabled}
            type={type} color={color}
            onClick={onClick} className={className}
        >{text}</Button>
    </div>
)

export default ButtonBox;
