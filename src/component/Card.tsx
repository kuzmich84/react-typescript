import React from 'react';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}


interface CardProps {
    width: string;
    height: string;
    variant: CardVariant;
    onClick: () => void;
}

const Card: React.FC<CardProps> = ({
                                       width,
                                       height,
                                       variant,
                                       children,
                                       onClick}) => {
    return (
        <div onClick={onClick} style={{
            width,
            height,
            border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
            background: variant === CardVariant.primary ? 'lightgray' : 'none'
        }}>
            {children}
        </div>
    );
}

export default Card;