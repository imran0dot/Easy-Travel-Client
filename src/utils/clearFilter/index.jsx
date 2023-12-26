const ClearFilter = ({onClick}) => {
    return (
        <p 
        onClick={onClick} 
        className="underline text-secondary cursor-pointer">Clear filter</p>
    );
};

export default ClearFilter;