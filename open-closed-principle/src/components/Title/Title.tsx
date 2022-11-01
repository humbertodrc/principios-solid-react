import React from "react";
import styles from "./styles/Title.module.css";
export interface TitleProps {
	title: string;
	children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({title, children}) => {
	return (
		<div className={styles.title}>
			<h1>{title}</h1>
			{children}
		</div>
	);
};

export default Title;
