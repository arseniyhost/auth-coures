import React from 'react';
import { Button, ToastHeader } from 'reactstrap';

const ButtonIconBox = ({ color, onClick, size, id, type }) => (
    <div>
        <Button
            id={id}
            color={color}
            size={size}
            onClick={onClick}
            type={type}
        >
            <ToastHeader icon="danger">
                X
        </ToastHeader>
        </Button>
    </div>
)


export default ButtonIconBox;
