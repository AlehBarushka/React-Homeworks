import styles from './Count.module.css';

const Count = (props) => {
	return (
		<div className={ styles.text }>
			Number of elements: <span>{ props.numberOfElements.length }</span>
		</div>
	);
};

export default Count;
