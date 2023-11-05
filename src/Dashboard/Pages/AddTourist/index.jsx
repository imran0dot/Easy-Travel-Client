import { useContext } from "react";
import { Functions } from "../../Layout/Provider/FunctionProvider";
import CustomFiled from "../../Components/CustomFiled";
import InputFiled from "../../../components/base/InputFiled";
import SimpleHeading from "../../../components/base/SimpleHeading";
import SimpleBoxContainer from "../../../components/base/SimpleBoxContainer";
import FileUploadInput from "../../../components/base/FileUploadInput";
import IncludeExcludeForm from "../../Components/IncludeExcludeForm";
import TextEditor from "../../../components/base/TextEditor";

const AddTourist = () => {
    const {
        title,
        handleTitleChange,
        handleRemoveFeatureImage,
        featureImage,
        handleFeatureImageChange,
        handleSubmit,
        loading } = useContext(Functions);
    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                <SimpleBoxContainer>
                    <SimpleHeading heading="Title" />
                    <InputFiled input={title} handleChange={handleTitleChange} />
                </SimpleBoxContainer>

                <TextEditor />
                
                <IncludeExcludeForm />
                <CustomFiled />

                <FileUploadInput
                    handleChange={handleFeatureImageChange}
                    handleRemove={handleRemoveFeatureImage}
                    imgSrc={featureImage}
                    loading={loading}
                />

                <div className="w-full flex flex-col justify-center items-center mx-auto mt-10">
                    <input className="btn px-10 bg-secondary text-white" type="submit" value="Post Now" />
                </div>

            </form>
        </div>
    );
};

export default AddTourist;