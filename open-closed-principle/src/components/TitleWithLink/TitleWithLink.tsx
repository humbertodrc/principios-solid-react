import React from "react";
import Title from '../Title/Title';
export interface TitleWithLinkProps {
	title: string;
	href: string;
	buttonText: string;
}

const TitleWithLink: React.FC<TitleWithLinkProps> = ({href, buttonText, title}) => {
	return (
		<Title title={title}>
			<div>
				<a href={href}>{buttonText}</a>
			</div>
		</Title>
	);
};

export default TitleWithLink;
