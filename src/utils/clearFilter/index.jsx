const ClearFilter = ({ apiUrl, setCallApi }) => {
    return (
        <p onClick={() => { setCallApi(apiUrl) }} className="underline text-secondary cursor-pointer">Clear filter</p>
    );
};

export default ClearFilter;