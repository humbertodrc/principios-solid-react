import React from "react";
import Title from "../Title/Title";
export interface TitleWithButtonProps {
	title: string;
	buttonText: string;
	onClick: () => void;
}

const TitleWithButton: React.FC<TitleWithButtonProps> = ({
	title,
	buttonText,
	onClick,
}) => {
	return (
		<Title title={title}>
			<button onClick={onClick}>{buttonText}</button>
		</Title>
	);
};

export default TitleWithButton;
