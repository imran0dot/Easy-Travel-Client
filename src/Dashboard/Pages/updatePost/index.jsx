import { useLocation, useParams } from "react-router-dom";
import Form from "../../Components/Form";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const UpdatePost = ({ category }) => {
    const [placeHolder, setPlaceHolder] = useState({});
    const { pathname } = useLocation();
    const urlPath = pathname.split('/')[2];
    const { id } = useParams();
    const apiUrl = urlPath + "/" + id
    useEffect(() => {
        axios(apiUrl).then(res => setPlaceHolder(res.data)).catch(() => toast.error("data not found!"))
    }, []);


    return <Form category={category ? true : false} api={{ type: "put", apiUrl }} placeHolder={placeHolder} />

};

export default UpdatePost;