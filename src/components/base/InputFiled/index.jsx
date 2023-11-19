import { useEffect, useState } from "react";

const InputFiled = ({ index, input, onChange }) => {
    const [handleInput, setHandleInput] = useState("");
    useEffect(() => {
        setHandleInput(input)
    }, [input])

    const handleChange = (e) => {
        onChange(index, e);
        setHandleInput(e.target.value)
    }
    return (
        <div key={index} className="flex items-center m-2 w-full">
            <input
                className="w-full border p-2 text-lg"
                type="text"
                placeholder="New item text here"
                value={handleInput}
                onChange={handleChange}
            />
        </div>
    );
};

export default InputFiled;