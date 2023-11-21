import { useEffect, useState } from "react";

const InputFiled = ({ index, input, onChange, label, placeholder, type, name }) => {
    const [handleInput, setHandleInput] = useState("");

    useEffect(() => {
        setHandleInput(input)
    }, [input])

    const handleChange = (e) => {
        if(onChange){
            onChange(index, e);
        }
        setHandleInput(e.target.value)
    }

    return (
        <div key={index} className="flex items-center">
            <label className="w-full" htmlFor={name}>{label}
                <input
                    name={name}
                    className="w-full border p-5 text-lg input border-gray-300 rounded-none focus:outline-none"
                    type={type ? type : "text"}
                    placeholder={placeholder ? placeholder : "New item text here"}
                    value={handleInput ? handleInput : ""}
                    onChange={handleChange}
                />
            </label>
        </div>
    );
};

export default InputFiled;