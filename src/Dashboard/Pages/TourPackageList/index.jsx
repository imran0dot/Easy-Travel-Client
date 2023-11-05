import { Link, useLoaderData } from "react-router-dom";

const TourPackageList = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <Link to="/dashboard/add-tour-package" className="btn bg-primary btn-md text-white px-10">Add New Package</Link>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, index) => {
                                return (
                                    <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{item?.title}</td>
                                    <td dangerouslySetInnerHTML={{__html: item?.content}}></td>
                                    <td><button>delete</button> <button>Edit</button></td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TourPackageList;