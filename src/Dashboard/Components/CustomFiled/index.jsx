import { useContext } from "react";
import { Functions } from "../../Layout/Provider/FunctionProvider";
import IncreasingFiled from "../IncreasingFiled";
import DeleteBtn from "../../../components/base/DeleteBtn";
import SimpleHeading from "../../../components/base/SimpleHeading";
import SimpleBoxContainer from "../../../components/base/SimpleBoxContainer";

const CustomFiled = () => {
    const {
        custom,
        addCustomFiledHandle,
        customFildHeading,
        handleRemoveCustom,
        handleCustomInputChange,
        handleAddCustomInput,
        handleRemoveCustomInput } = useContext(Functions);

    return (
        <div className="bg-whit w-full">
            <SimpleBoxContainer>
                <SimpleHeading heading="Add Custom Data" />
                <div className="flex flex-col gap-10">
                    {
                        custom?.map((customBox, index) => {
                            const { heading, data } = customBox;

                            return (
                                <div key={index} className="relative">
                                    <DeleteBtn className="btn bg-red-600 text-white absolute right-5 top-5" handleRemove={() => handleRemoveCustom(index)} />

                                    <IncreasingFiled
                                        data={{
                                            heading: heading,
                                            filed: data,
                                            blockIndex: index,
                                            handleChange: handleCustomInputChange,
                                            handleAddNew: handleAddCustomInput,
                                            handleRemove: handleRemoveCustomInput,
                                        }} />
                                </div>
                            )
                        })
                    }
                </div>

                <div className="flex mt-10 p-10">
                    <input
                        className="w-full border p-2"
                        type="text"
                        placeholder="New item text here"
                        ref={customFildHeading}
                    />
                    <button type="button" onClick={addCustomFiledHandle} className="btn btn-primary rounded-sm bg-primary border-none text-white">Add New Custom Filed</button>
                </div>

            </SimpleBoxContainer>
        </div>

    );
};

export default CustomFiled;