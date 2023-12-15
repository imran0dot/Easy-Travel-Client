import axios from "axios";
import { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import fileUpload from "../../../../utils/fileUploader";

export const FromStates = createContext(null);

const FromStatesProvider = ({ children }) => {
    const [title, setTitle] = useState(localStorage.getItem("title") || "");
    const [content, setContent] = useState("");
    const [featureImage, setFeatureImage] = useState(JSON.parse(localStorage.getItem("image")) || null);
    const [price, setPrice] = useState(localStorage.getItem("price") || "");
    const [categoryItem, setCategoryItem] = useState("");


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
        setPrice(inputPrice);
        localStorage.setItem('price', inputPrice)
    }

    // IMAGE 
    const handleFeatureImageChange = (e, setLoading) => {
        const file = e.target.files[0];
        fileUpload(file).then(res => {
            localStorage.setItem("image", JSON.stringify(res?.data?.url))
            setFeatureImage(res?.data?.url)
            setLoading(false)
        }).catch((err) => console.error(err))
    };

    // SELECT ITEM 
    const handleSelectItemChange = (value) => {
        setCategoryItem(value);
        localStorage.setItem("category", JSON.stringify(value));
    }


    const handleRemoveFeatureImage = () => {
        localStorage.removeItem('image');
        setFeatureImage(null)
    }

    const clearStoreage = () => {
        setTitle("")
        setContent("")
        setPrice("")
        setFeatureImage("")
        setCategoryItem("")
        localStorage.removeItem("title")
        localStorage.removeItem("content")
        localStorage.removeItem("price")
        localStorage.removeItem("image");
        localStorage.removeItem("category")
    }

    // FORM SUBMIT 
    const handleSubmit = async (api, data) => {
        const { type, apiUrl } = api;

        if (type === "patch") {
            try {
                console.log(data);
                // axios.patch(apiUrl, data)
                //     .then(res => {
                //         if (res.status === 200) {
                //             clearStoreage();
                //             toast.success("post has been updated!")
                //         } else {
                //             toast.error("Something went Wrong! Please Full Fill All Require Items")
                //         }
                //     })
                //     .catch((err) => {
                //         toast.error("Something went Wrong!" + err)
                //     })
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
        setFeatureImage,
        handleFeatureImageChange,
        handleRemoveFeatureImage,

        price,
        setPrice,
        handlePriceChange,

        categoryItem,
        setCategoryItem,
        handleSelectItemChange,

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