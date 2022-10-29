import React from 'react';
import Button from '../Button/Button';
import './styles/ButtonIcon.css';
export interface ButtonIconInterface {
	children: React.ReactNode;
	isBig: boolean;
}

const ButtonSize : React.FC<ButtonIconInterface> = ({children, isBig}) => {
	return <Button color='primary' size={isBig ? "medium" : "small"}>{children}</Button>;
};

export default ButtonSize;
