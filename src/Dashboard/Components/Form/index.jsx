import { useContext, useEffect } from "react";
import { FromStates } from "../../Layout/Provider/formStateHandler";
import InputFiled from "../../../components/base/InputFiled";
import SimpleBoxContainer from "../../../components/base/SimpleBoxContainer";
import FileUploadInput from "../../../components/base/FileUploadInput";
import TextEditor from "../../../components/base/TextEditor";
import SimpleHeading from "../../../components/base/SimpleHeading";
import { useLocation } from "react-router-dom";
// import ImagePopUp from "../../../components/base/ImagesPopup";

const Form = ({ handleSubmit, countrys, placeHolder, priceElement }) => {
    const {
        title,
        handleTitleChange,
        featureImage,
        setFeatureImage,
        handleFeatureImageChange,
        handleRemoveFeatureImage,
        content,
        price,
        clearStoreage,
        handlePriceChange,
        handleCountryChange,
        handleContentChange,
    } = useContext(FromStates);


    const submitForm = (e) => {
        e.preventDefault();
        handleSubmit()
    };

    const { pathname } = useLocation();

    useEffect(() => {
        clearStoreage()
    }, [pathname])

    return (
        <div className="relative">
            <form onSubmit={submitForm} className="flex flex-col gap-10 w-full">
                <div className="flex gap-10">
                    <div className="flex flex-col  gap-10 w-8/12">
                        {/* TITLE BAR */}
                        <SimpleBoxContainer>
                            <InputFiled
                                input={placeHolder ? placeHolder?.title : title}
                                onChange={handleTitleChange} label="Title" />
                        </SimpleBoxContainer>
                        {/* TEST EDITOR  */}
                        <TextEditor handleChange={handleContentChange} content={placeHolder ? placeHolder?.content : content} />

                        {/* CATEGORY SECTION  */}
                        {countrys &&
                            <SimpleBoxContainer>
                                <SimpleHeading heading={`Select ${countrys?.name}`} />
                                {/* <p className="text-xl font-bold mb-2"></p> */}
                                <select onClick={(e) => handleCountryChange(e.target.value)} className="select select-bordered w-full rounded-none">
                                    <option disabled selected value={null}>Please Select A Option</option>
                                    {countrys?.items.map((item, index) => {
                                        return <option key={index}>{item.name}</option>
                                    })}
                                </select>
                            </SimpleBoxContainer>
                        }
                    </div>


                    {/* FORM SIDEBAR  */}
                    <div className="flex flex-col gap-10 w-4/12">

                        {/* PRICE INPUT  */}
                        {priceElement &&
                            <SimpleBoxContainer>
                                <InputFiled type="number" input={placeHolder ? placeHolder?.price : price} onChange={handlePriceChange} label="Price" />
                            </SimpleBoxContainer>}


                        {/* IMAGE INPUT  */}
                        <FileUploadInput
                            placeHolder={placeHolder ? placeHolder.featureImage : ""}
                            imgSrc={featureImage}
                            setFeatureImage={setFeatureImage}
                            handleChange={handleFeatureImageChange}
                            handleRemove={handleRemoveFeatureImage}
                        />
                    </div>

                </div>

                <div className="w-full flex flex-col justify-center items-center mx-auto mt-10">
                    <input className="btn px-10 bg-blue-900 hover:bg-secondary text-white" type="submit" value="Post Now" />
                </div>

            </form>

            {/* <ImagePopUp /> */}
        </div>
    );
};

export default Form;