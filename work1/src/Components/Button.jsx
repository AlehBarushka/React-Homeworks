import styles from './Button.module.css';

const Button = (props) => {
    return <button onClick={ props.handleClick } onMouseEnter={ props.handleMouseEnter } >{ props.name }</button>;
};

export default Button;



