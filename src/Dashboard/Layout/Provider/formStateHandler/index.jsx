import axios from "axios";
import { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";

export const FromStates = createContext(null);

const FromStatesProvider = ({ children }) => {
    const [title, setTitle] = useState(localStorage.getItem("title") || "");
    const [content, setContent] = useState(localStorage.getItem("content") || "");
    const [featureImage, setFeatureImage] = useState(JSON.parse(localStorage.getItem("img")) || {});


    const handleTitleChange = (index, event) => {
        setTitle(event.target.value);
        localStorage.setItem("title", event.target.value);
    }

    const handleContentChange = (newContent) => {
        setContent(newContent);
        localStorage.setItem('content', newContent)
    }

    const handleRemoveFeatureImage = () => {
        axios.delete(featureImage.delete_url).then(res => console.log(res));
        localStorage.removeItem('img');
        setFeatureImage("")
    }

// Form submit Function 
    const handleSubmit = async (api) => {
        const {type, apiUrl} = api;

        const data = {
            title,
            content,
            featureImage,
        }

        if(type === "put"){
            try {
                axios.put(apiUrl, data)
                .then(res => {
                    if (res.status === 200) {
                        setTitle("")
                        setContent("")
                        setFeatureImage("")
                        localStorage.removeItem("title")
                        localStorage.removeItem("content")
                        localStorage.removeItem("custom")
                        localStorage.removeItem("img");
                        toast.success("post has been updated!")
                    }else{
                        toast.error("Something went Wrong! Please Full Fill All Require Items")
                    }
                })
                .catch ((err) => {
                    toast.error("Something went Wrong!" + err)
                })
            } catch (error) {
                toast.error("Something went Wrong! Please Full Fill All Require Items")
            }
        }

        else{
            try {
                axios.post(apiUrl, data)
                .then(res => {
                    if (res.status === 200) {
                        setTitle("")
                        setContent("")
                        setFeatureImage("")
                        localStorage.removeItem("title")
                        localStorage.removeItem("content")
                        localStorage.removeItem("custom")
                        localStorage.removeItem("img");
                        toast.success("post has been updated!")
                    }else{
                        toast.error("Something went Wrong! Please Full Fill All Require Items")
                    }
                })
                .catch (() => {
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
        content,
        featureImage,
        handleTitleChange,
        handleContentChange,
        handleRemoveFeatureImage,
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