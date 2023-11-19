import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { createContext, useEffect } from "react";
import { toast } from "react-toastify";


export const Functions = createContext(null);

const FuntionProvider = ({ children }) => {
    const storedCustomItems = localStorage.getItem("custom");
    const [title, setTitle] = useState(localStorage.getItem("title") || "");
    const [content, setContent] = useState(localStorage.getItem("content") || "");
    const [featureImage, setFeatureImage] = useState(JSON.parse(localStorage.getItem("img")) || {});
    const [custom, setCustom] = useState([]);


    const handleTitleChange = (index, event) => {
        setTitle(event.target.value);
        localStorage.setItem("title", event.target.value);
    }

    const handleContentChange = (newContent) => {
        setContent(newContent);
        localStorage.setItem('content', newContent)
    }

    const handleCustomInputChange = (index, event, blockIndex) => {
        const values = [...custom];
        values[blockIndex].data[index] = event.target.value;
        localStorage.setItem("custom", JSON.stringify(values));
        setCustom(values);
    };



    const handleAddCustomInput = (index) => {
        const values = [...custom];
        values[index].data.push("");
        setCustom(values);
    }


    const handleRemoveFeatureImage = () => {
        axios.delete(featureImage.delete_url).then(res => console.log(res));
        localStorage.removeItem('img');
        setFeatureImage("")
    }
 

    const handleRemoveCustomInput = (dataIndex, blockIndex) => {
        const values = [...custom];
        values[blockIndex].data.splice(dataIndex, 1);
        localStorage.setItem("custom", JSON.stringify(values));
        setCustom(values);
    }

    const handleRemoveCustom = (index) => {
        const values = [...custom];
        values.splice(index, 1);
        localStorage.setItem("custom", JSON.stringify(values));
        setCustom(values);
    };


    // custom file input chnage 
    const customFildHeading = useRef(null);
    const addCustomFiledHandle = () => {
        const headText = customFildHeading.current.value;
        setCustom((prev) => [...prev, { heading: headText, data: [""] }]);
        customFildHeading.current.value = "";
    }



    const handleSubmit = async (api) => {
        const {type, apiUrl} = api;

        const data = {
            title,
            content,
            featureImage,
            custom,
        }

        if(type === "put"){
            try {
                axios.put(apiUrl, data)
                .then(res => {
                    if (res.status === 200) {
                        setTitle("")
                        setContent("")
                        setCustom([])
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
                        setCustom([])
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

    const handleDeleteSinglePost = (id, api, refetch) => {
        axios.delete(`${api}/${id}`)
            .then(() => {
                refetch();
                toast.success("item deleted")
            }).catch((err) => {
                toast.error(`something went wrong ${err}`)
            })
    }

    useEffect(() => {
        localStorage.setItem("custom", JSON.stringify(custom));
    }, [custom])


    useEffect(() => {
        storedCustomItems && setCustom(JSON.parse(storedCustomItems))
    }, []);


    const funtions = {
        title,
        content,
        featureImage,
        custom,
        setCustom,
        handleTitleChange,
        handleContentChange,
        handleCustomInputChange,
        handleRemoveFeatureImage,
        handleAddCustomInput,
        handleRemoveCustom,
        handleRemoveCustomInput,
        handleSubmit,
        customFildHeading,
        addCustomFiledHandle,
        handleDeleteSinglePost
    }

    return (
        <Functions.Provider value={funtions}>
            {children}
        </Functions.Provider>
    );
};

export default FuntionProvider;