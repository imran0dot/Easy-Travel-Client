const InputFiled = ({index, input, handleChange, blockIndex}) => {
    return (
        <div key={index} className="flex items-center m-2 w-full">
            <input
                className="w-full border p-2 text-lg"
                type="text"
                placeholder="New item text here"
                value={input}
                onChange={(event) => handleChange(index, event, blockIndex)}
            />
        </div>
    );
};

export default InputFiled;