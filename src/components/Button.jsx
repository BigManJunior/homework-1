const Button = (props) => {
    const { text = "Start Order", className = "btn" } = props;
    return <button className={className}>{text}</button>;
}

export default Button;