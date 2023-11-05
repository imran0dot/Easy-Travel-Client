import DeleteBtn from "../DeleteBtn";
import InputFiled from "../InputFiled";

const InputFiledWithDelete = ({ input, index, handleChange, handleRemove, blockIndex }) => {

    return (
        <div key={index} className="flex items-center m-2">
            <InputFiled index={index} input={input} handleChange={handleChange} blockIndex={blockIndex} />
            <DeleteBtn handleRemove={() => handleRemove(index, blockIndex)} />
        </div>
    )
};

export default InputFiledWithDelete;