import Button from './Components/Button/Button';
import Count from './Components/Count/Count';
import List from './Components/List/List';
import Title from './Components/Title/Title';

const App = (props) => {
	return (
		<>
			<Title />
			<List numberList={props.randomNumbers} />
			<Button addNewNumber={props.addNewNumber} />
			<Count numberOfElements={props.randomNumbers} />
		</>
	);
};

export default App;
