import './App.css';
import Button from './Components/Button';

function App(props) {
	return <Button handleClick={ props.handleClick } name={ props.buttonNames.selfdestructButton } />;
}

export default App;
