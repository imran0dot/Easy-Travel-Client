import { useLocation } from "react-router-dom";
import Form from "../../Components/Form";
const AddPost = ({ category }) => {
    const { pathname } = useLocation();
    const apiUrl = pathname.split('/')[2];

    return <Form category={category ? true : false} api={{ type: "post", apiUrl }} />

};

export default AddPost;