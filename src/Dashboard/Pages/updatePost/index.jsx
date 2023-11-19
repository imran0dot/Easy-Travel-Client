import { useLocation, useParams } from "react-router-dom";
import Form from "../../Components/Form";
const UpdatePost = () => {
    const { pathname } = useLocation();
    const apiUrl = pathname.split('/')[2];
    const {id} = useParams();


    return <Form api={{ type: "put", apiUrl: apiUrl + "/" + id }} />

};

export default UpdatePost;