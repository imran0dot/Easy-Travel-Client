import axios from "axios";
import { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import fileUpload from "../../../../utils/fileUploader";

export const FromStates = createContext(null);

const FromStatesProvider = ({ children }) => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("");
    const [featureImage, setFeatureImage] = useState(null);
    const [price, setPrice] = useState("")
    const [country, setCountry] = useState("");


    // TITLE

    const handleTitleChange = (inputTitel) => {
        setTitle(inputTitel);
    }

    // CONTENT 
    const handleContentChange = (newContent) => {
        setContent(newContent);
    }

    // PRICE 
    const handlePriceChange = (inputPrice) => {
        setPrice(inputPrice);
    }

    // IMAGE 
    const handleFeatureImageChange = (e, setLoading) => {
        const file = e.target.files[0];
        setLoading(true)
        fileUpload(file).then(res => {
            setFeatureImage(res?.data?.url)
            setLoading(false)
        }).catch(() => setLoading(true))
    };

    // SELECT ITEM 
    const handleCountryChange = (value) => {
        setCountry(value);
    }


    const handleRemoveFeatureImage = () => {
        setFeatureImage(null)
    }

    const clearStoreage = () => {
        setTitle("")
        setContent("")
        setPrice("")
        setFeatureImage("")
        setCountry("")
    }

    // FORM SUBMIT 
    const handleSubmit = async (api, data) => {
        const { type, apiUrl } = api;

        if (type === "patch") {
            try {
                console.log(data);
                axios.patch(apiUrl, data)
                    .then(res => {
                        if (res.status === 200) {
                            toast.success("post has been updated!")
                        } else {
                            toast.error("Something went Wrong! Please Full Fill All Require Items")
                        }
                    })
                    .catch((err) => {
                        toast.error("Something went Wrong!" + err)
                    })
            } catch (error) {
                toast.error("Something went Wrong! Please Full Fill All Require Items")
            }
        }

        else {
            try {
                axios.post(apiUrl, data)
                    .then(res => {
                        if (res.status === 200) {
                            clearStoreage();
                            toast.success("Post has been updated")
                        } else {
                            toast.error("Something went Wrong! Please Full Fill All Require Items")
                        }
                    })


                    .catch(() => {
                        toast.error("Something went Wrong! Please Full Fill All Require Items")
                    })
            } catch (error) {
                toast.error("Something went Wrong! Please Full Fill All Require Items")
            }
        }
    }
    // delete single item 
    const handleDeleteSinglePost = (id, api, refetch) => {
        axios.delete(`${api}/${id}`)
            .then(() => {
                refetch();
                toast.success("Post deleted successfully.")
            }).catch((err) => {
                toast.error(`something went wrong ${err}`)
            })
    }



    const funtions = {
        title,
        handleTitleChange,

        content,
        handleContentChange,

        featureImage,
        setFeatureImage,
        handleFeatureImageChange,
        handleRemoveFeatureImage,

        price,
        setPrice,
        handlePriceChange,

        country,
        setCountry,
        handleCountryChange,

        handleSubmit,
        handleDeleteSinglePost
    }

    return (
        <FromStates.Provider value={funtions}>
            {children}
        </FromStates.Provider>
    );
};

export default FromStatesProvider;