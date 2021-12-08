import styles from './Button.module.css';

const Button = (props) => {
	const addRandomNumber = () => props.addNewNumber();
	return <button onClick={ addRandomNumber } className={ styles.button }>Add Number</button>;
};

export default Button;
