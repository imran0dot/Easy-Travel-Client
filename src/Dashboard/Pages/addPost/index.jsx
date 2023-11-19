import { useLocation } from "react-router-dom";
import Form from "../../Components/Form";
const AddPost = () => {
    const { pathname } = useLocation();
    const apiUrl = pathname.split('/')[2];

    return <Form api={{ type: "post", apiUrl }} />

};

export default AddPost;