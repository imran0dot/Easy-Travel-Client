import { useEffect, useState } from "react";
import SimpleHeading from "../SimpleHeading";

const InputFiled = ({ index, input, onChange, label, placeholder, type, name }) => {
    const [handleInput, setHandleInput] = useState("");

    useEffect(() => {
        setHandleInput(input)
        if (onChange) {
            onChange(input);
        }
    }, [input])

    const handleChange = (e) => {
        if (onChange) {
            onChange(e.target.value);
        }
        setHandleInput(e.target.value)
    }

    return (
        <div key={index} className="flex items-center">
            <label className="w-full" htmlFor={name}>
                <SimpleHeading heading={label} />
                <input
                    name={name}
                    className="w-full border p-5 text-sm input border-gray-300 rounded-none focus:outline-none"
                    type={type ? type : "text"}
                    placeholder={placeholder ? placeholder : "Write Here..."}
                    value={handleInput ? handleInput : ""}
                    onChange={handleChange}
                />
            </label>
        </div>
    );
};

export default InputFiled;