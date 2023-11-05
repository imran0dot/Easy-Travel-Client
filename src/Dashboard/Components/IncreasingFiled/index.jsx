import InputFiledWithDelete from "@components/base/InputFiledWithDelete";
import SimpleHeading from "../../../components/base/SimpleHeading";
import SimpleBoxContainer from "../../../components/base/SimpleBoxContainer";

const IncreasingFiled = ({ data }) => {
    const { heading, filed, handleChange, handleAddNew, handleRemove, blockIndex } = data;
    return (
            <SimpleBoxContainer>
                <SimpleHeading heading={heading} />

                {filed?.map((input, index) => <InputFiledWithDelete
                    key={index}
                    input={input}
                    blockIndex={blockIndex}
                    index={index}
                    handleChange={handleChange}
                    handleRemove={handleRemove} />)}

                <button className="btn btn-primary mt-5 rounded-sm" type="button" onClick={() => handleAddNew(blockIndex)}>
                    Add new Includes
                </button>

            </SimpleBoxContainer>
    );
};

export default IncreasingFiled;