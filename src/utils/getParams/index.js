import { useLocation } from "react-router-dom";

const getParams = (paramsName) => {
    const search = useLocation().search
    const searchParams = new URLSearchParams(search);
    const singleItemId = searchParams.get(paramsName);
    return singleItemId;
}

export default getParams;
