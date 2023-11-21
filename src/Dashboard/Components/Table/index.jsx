import { Link } from "react-router-dom";
import DeleteBtn from "../../../components/base/DeleteBtn";
import { AiOutlineEdit } from "react-icons/ai"
const Table = ({ data, functions }) => {
    const { api, handleDeleteSinglePost, refetch } = functions;
    return (
        <div>
            {
                data?.length <= 0 ?
                    <div className="h-[70ch] flex justify-center items-center">
                        <p className="text-3xl text-center">No Data Found,<br /> Please add data and try again</p>
                    </div>

                    :

                    <div className="overflow-x-auto mt-3">
                        <table className="table table-zebra border border-black">
                            {/* head */}
                            <thead className="border border-black  bg-secondary  text-white text-2xl font-normal">
                                <tr className="border border-black">
                                    <th></th>
                                    <th>Title</th>
                                    <th>Time</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody className="border border-black">
                                {
                                    data?.map((item, index) => {
                                        return (
                                            <tr key={index} className="border border-black">
                                                <th>{index + 1}</th>
                                                <td>{item?.title}</td>
                                                <td>{item?.date}</td>
                                                <td>
                                                    <DeleteBtn handleRemove={() => handleDeleteSinglePost(item?._id, api, refetch)} className="btn-sm">Delete</DeleteBtn>

                                                    <Link to={`update/${item?._id}`} className="btn border-none btn-sm bg-green-600 hover:bg-green-900 text-white rounded-sm z-10">Edit <AiOutlineEdit /> </Link>
                                                    
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
            }

        </div>
    );
};

export default Table;