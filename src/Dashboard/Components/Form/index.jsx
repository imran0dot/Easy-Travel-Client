import { useContext } from "react";
import { Functions } from "../../Layout/Provider/FunctionProvider";
import CustomFiled from "../../Components/CustomFiled";
import InputFiled from "../../../components/base/InputFiled";
import SimpleHeading from "../../../components/base/SimpleHeading";
import SimpleBoxContainer from "../../../components/base/SimpleBoxContainer";
import FileUploadInput from "../../../components/base/FileUploadInput";
import IncludeExcludeForm from "../../Components/IncludeExcludeForm";
import TextEditor from "../../../components/base/TextEditor";

const Form = ({ postAPi, category }) => {
    const {
        title,
        handleTitleChange,
        handleRemoveFeatureImage,
        featureImage,
        handleSubmit } = useContext(Functions);

    const submitForm = (e) => {
        e.preventDefault();
        handleSubmit(postAPi)
    }
    return (
        <div>
            <form onSubmit={submitForm} className="flex flex-col gap-10 w-full">
                <div className="flex gap-10">
                    <div className="flex flex-col  gap-10 w-8/12">
                        <SimpleBoxContainer>
                            <SimpleHeading heading="Title" />
                            <InputFiled input={title} handleChange={handleTitleChange} />
                        </SimpleBoxContainer>

                        <TextEditor />

                        <IncludeExcludeForm />
                        <CustomFiled />
                    </div>

                    <div className="flex flex-col gap-10 w-4/12">
                        {category &&
                            <SimpleBoxContainer>
                                <p className="text-2xl font-bold mb-2">Category</p>
                                <select className="select select-bordered w-full rounded-none">
                                    <option disabled selected>Who shot first?</option>
                                    <option>Han Solo</option>
                                    <option>Greedo</option>
                                </select>
                            </SimpleBoxContainer>
                        }

                        <FileUploadInput
                            handleRemove={handleRemoveFeatureImage}
                            imgSrc={featureImage}
                        />
                    </div>
                </div>

                <div className="w-full flex flex-col justify-center items-center mx-auto mt-10">
                    <input className="btn px-10 bg-blue-900 hover:bg-secondary text-white" type="submit" value="Post Now" />
                </div>

            </form>
        </div>
    );
};

export default Form;