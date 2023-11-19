import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { createContext, useEffect } from "react";
import { toast } from "react-toastify";


export const Functions = createContext(null);

const FuntionProvider = ({ children }) => {
    const storedIncludesItems = localStorage.getItem("includes");
    const storedExcludesItems = localStorage.getItem("excludes");
    const storedCustomItems = localStorage.getItem("custom");
    const cheakIncludedItems = JSON.parse(storedIncludesItems)?.length <= 0;
    const cheakExcludesItems = JSON.parse(storedExcludesItems)?.length <= 0;
    const [title, setTitle] = useState(localStorage.getItem("title") || "");
    const [content, setContent] = useState(localStorage.getItem("content") || "");
    const [featureImage, setFeatureImage] = useState(JSON.parse(localStorage.getItem("img")) || {});
    const [includes, setIncludes] = useState([cheakIncludedItems && JSON.parse(storedIncludesItems) || ""]);
    const [excludes, setExcludes] = useState([cheakExcludesItems && JSON.parse(storedExcludesItems) || ""]);
    const [custom, setCustom] = useState([]);


    const handleTitleChange = (index, event) => {
        setTitle(event.target.value);
        localStorage.setItem("title", event.target.value);
    }

    const handleContentChange = (newContent) => {
        setContent(newContent);
        localStorage.setItem('content', newContent)
    }

    const handleIncludesChange = (index, event) => {
        const values = [...includes];
        values[index] = event.target.value;
        localStorage.setItem("includes", JSON.stringify(values));
        setIncludes(values);
    };

    const handleExcludesChange = (index, event) => {
        const values = [...excludes];
        values[index] = event.target.value;
        localStorage.setItem("excludes", JSON.stringify(values));
        setExcludes(values);
    };


    const handleCustomInputChange = (index, event, blockIndex) => {
        const values = [...custom];
        values[blockIndex].data[index] = event.target.value;
        localStorage.setItem("custom", JSON.stringify(values));
        setCustom(values);
    };


    const handleAddIncludes = () => {
        const values = [...includes];
        values.push("");
        setIncludes(values);
    };

    const handleAddExcludes = () => {
        const values = [...excludes];
        values.push("");
        setExcludes(values);
    };

    const handleAddCustomInput = (index) => {
        const values = [...custom];
        values[index].data.push("");
        setCustom(values);
    }


    const handleRemoveIncludes = (index) => {
        const values = [...includes];
        values.splice(index, 1);
        localStorage.setItem("includes", JSON.stringify(values));
        setIncludes(values);
    };

    const handleRemoveFeatureImage = () => {
        axios.delete(featureImage.delete_url).then(res => console.log(res));
        localStorage.removeItem('img');
        setFeatureImage("")
    }
    const handleRemoveExcludes = (index) => {
        const values = [...excludes];
        values.splice(index, 1);
        localStorage.setItem("excludes", JSON.stringify(values));
        setExcludes(values);
    };

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
        console.log(type, apiUrl)

        const data = {
            title,
            content,
            featureImage,
            includes,
            excludes,
            custom,
        }

        if(type === "put"){
            try {
                axios.put(apiUrl, data)
                .then(res => {
                    if (res.status === 200) {
                        setTitle("")
                        setContent("")
                        setIncludes([""])
                        setExcludes([""])
                        setCustom([])
                        setFeatureImage("")
                        localStorage.removeItem("title")
                        localStorage.removeItem("content")
                        localStorage.removeItem("includes")
                        localStorage.removeItem("excludes")
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
                        setIncludes([""])
                        setExcludes([""])
                        setCustom([])
                        setFeatureImage("")
                        localStorage.removeItem("title")
                        localStorage.removeItem("content")
                        localStorage.removeItem("includes")
                        localStorage.removeItem("excludes")
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
        storedIncludesItems && setIncludes(JSON.parse(storedIncludesItems));
        storedExcludesItems && setExcludes(JSON.parse(storedExcludesItems));
        storedCustomItems && setCustom(JSON.parse(storedCustomItems))
    }, []);


    const funtions = {
        title,
        content,
        includes,
        setIncludes,
        featureImage,
        excludes,
        setExcludes,
        custom,
        setCustom,
        handleTitleChange,
        handleContentChange,
        handleIncludesChange,
        handleExcludesChange,
        handleCustomInputChange,
        handleAddIncludes,
        handleRemoveFeatureImage,
        handleAddExcludes,
        handleAddCustomInput,
        handleRemoveIncludes,
        handleRemoveExcludes,
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