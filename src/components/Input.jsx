const Input = (props) => {
    const { placeholder, type, 'aria-label': ariaLabel } = props;
    return <input type={type} placeholder={placeholder} aria-label={ariaLabel} />
}

export default Input;