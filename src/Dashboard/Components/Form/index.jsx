import { useContext } from "react";
import { FromStates } from "../../Layout/Provider/formStateHandler";
import InputFiled from "../../../components/base/InputFiled";
import SimpleHeading from "../../../components/base/SimpleHeading";
import SimpleBoxContainer from "../../../components/base/SimpleBoxContainer";
import FileUploadInput from "../../../components/base/FileUploadInput";
import TextEditor from "../../../components/base/TextEditor";

const Form = ({ api, categorys, placeHolder }) => {
    const {
        title,
        handleTitleChange,
        featureImage,
        handleFeatureImageChange,
        handleRemoveFeatureImage,
        content,
        handleContentChange,
        handleSubmit } = useContext(FromStates);

    const submitForm = (e) => {
        e.preventDefault();
        handleSubmit(api);
    }

    return (
        <div>
            <form onSubmit={submitForm} className="flex flex-col gap-10 w-full">
                <div className="flex gap-10">
                    <div className="flex flex-col  gap-10 w-8/12">
                        <SimpleBoxContainer>
                            <SimpleHeading heading="Title" />
                            <InputFiled input={placeHolder ? placeHolder?.title : title} onChange={handleTitleChange} />
                        </SimpleBoxContainer>

                        <TextEditor
                            handleChange={handleContentChange}
                            content={placeHolder ? placeHolder?.content : content}
                        />

                    </div>

                    <div className="flex flex-col gap-10 w-4/12">
                        {categorys &&
                            <SimpleBoxContainer>
                                <p className="text-2xl font-bold mb-2">Select {categorys?.name}</p>
                                <select className="select select-bordered w-full rounded-none">
                                    <option disabled selected>Please Select A Option</option>
                                    {categorys?.items.map((item, index) => <option key={index}>{item.name}</option>)}
                                </select>
                            </SimpleBoxContainer>
                        }

                        <FileUploadInput
                            imgSrc={featureImage}
                            handleChange={handleFeatureImageChange}
                            handleRemove={handleRemoveFeatureImage}
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