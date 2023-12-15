import axios from "axios";
import { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import fileUpload from "../../../../utils/fileUploader";

export const FromStates = createContext(null);

const FromStatesProvider = ({ children }) => {
    const [title, setTitle] = useState(JSON.parse(localStorage.getItem("title")) || "");
    const [content, setContent] = useState("");
    const [featureImage, setFeatureImage] = useState(JSON.parse(localStorage.getItem("image")) || null);
    const [price, setPrice] = useState(localStorage.getItem("price") || "");


    // TITLE

    const handleTitleChange = (inputTitel) => {
        setTitle(inputTitel);
        localStorage.setItem("title", JSON.stringify(inputTitel));
    }

    // CONTENT 
    const handleContentChange = (newContent) => {
        setContent(newContent);
        localStorage.setItem('content', newContent)
    }

    // PRICE 
    const handlePriceChange = (inputPrice) => {
        console.log(inputPrice)
        setPrice(inputPrice);
        localStorage.setItem('price', inputPrice)
    }

    // IMAGE 
    const handleFeatureImageChange = (e, setLoading) => {
        setLoading(true);
        const file = e.target.files[0];
        fileUpload(file).then(res => {
            localStorage.setItem("image", JSON.stringify(res?.data?.url))
            setFeatureImage(res?.data?.url)
            setLoading(false)
        }).catch(() => setLoading(false))
    };


    const handleRemoveFeatureImage = () => {
        localStorage.removeItem('image');
        setFeatureImage(null)
    }

    const clearLocalStoreage = () => {
        setTitle("")
        setContent("")
        setPrice("")
        setFeatureImage("")
        localStorage.removeItem("title")
        localStorage.removeItem("content")
        localStorage.removeItem("price")
        localStorage.removeItem("image");
    }
    // FORM SUBMIT 
    const handleSubmit = async (api, data) => {
        const { type, apiUrl } = api;

        console.log(data);

        if (type === "put") {
            try {
                axios.put(apiUrl, data)
                    .then(res => {
                        if (res.status === 200) {
                            clearLocalStoreage();
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
                        console.log(res);
                        if (res.status === 200) {
                            setTitle("")
                            setContent("")
                            setFeatureImage("")
                            localStorage.removeItem("title")
                            localStorage.removeItem("content")
                            localStorage.removeItem("custom")
                            localStorage.removeItem("img");
                            toast.success("post has been updated!")
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
                toast.success("item deleted")
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
        handleFeatureImageChange,
        handleRemoveFeatureImage,

        price,
        setPrice,
        handlePriceChange,

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