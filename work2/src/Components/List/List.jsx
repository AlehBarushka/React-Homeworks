import styles from './List.module.css';

const List = (props) => {
	const items = props.numberList.map((item, index) => <li key={ index }>{ item }</li>);
	return (
		<div className={ styles.container }>
			{ items }
		</div>
	);
};

export default List;
