import Form from "../../Components/Form";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const UpdatePost = ({ api, categorys, handleUpdate, priceElement }) => {
    const [placeHolder, setPlaceHolder] = useState({});


    useEffect(() => {
        axios(api)
            .then(res => {
                setPlaceHolder(res.data)
            })
            .catch(() => {
                toast.error("data not found!")
            }
            )
    }, []);

    return <Form priceElement={priceElement} categorys={categorys} placeHolder={placeHolder} handleSubmit={handleUpdate} />

};

export default UpdatePost;