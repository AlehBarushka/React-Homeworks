import styles from './Button.module.css';

const Button = (props) => {
    return <button onClick={ props.handleClick } >{ props.name }</button>;
};

export default Button;



