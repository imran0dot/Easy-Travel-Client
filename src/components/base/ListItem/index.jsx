import { FaRegTimesCircle, FaRegCheckCircle } from "react-icons/fa";

const ListItem = ({data, icon}) => {
    return (
        <li>
            {icon === "FaRegTimesCircle" && <FaRegTimesCircle className="inline text-3xl text-secondary mr-4" />}
            {icon === "FaRegCheckCircle" && <FaRegCheckCircle className="inline text-3xl text-secondary mr-4" />}
            {data}
        </li>
    );
};

export default ListItem;