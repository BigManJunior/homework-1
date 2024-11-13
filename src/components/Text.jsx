const Text = (props) => {
    const { children, className } = props;
    return <p className={className}>{children}</p>;
}

export default Text;