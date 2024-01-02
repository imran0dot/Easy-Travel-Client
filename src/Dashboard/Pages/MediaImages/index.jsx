import axios from "axios";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../../components/base/LoadingSpinner";


const MediaImages = () => {
    const [images, setImages] = useState(null);
    const [skip, setSkip] = useState(0)


    const handleNextBtn = () => {
        setSkip(pre => pre + 10);
    };

    const handlePreviousBtn = () => {
        setSkip(pre => {
            if (pre <= 0) {
                return 0
            }
            return pre - 10
        });
    }

    useEffect(() => {
        axios(`image-upload?skip=${skip}`).then(res => setImages(res.data))
    }, [skip]);


    if (!images) {
        return <LoadingSpinner />
    }

    return (
        <div className='bg-white border p-3 rounded-md shadow-md'>
            <div className="relative p-4">
                {/* images map  */}
                <div className="grid grid-cols-5 gap-2">
                    {
                        images?.map((image) => {
                            return (
                                <div key={image._id} className="border shadow-sm p-3 rounded-sm">
                                    <img src={image.url} alt="" />
                                </div>
                            )
                        })
                    }
                </div>

                {/* Pagination buttons  */}
                <div className="w-4/12 mx-auto">
                    <div className="join grid grid-cols-2 mt-10">
                        <button
                            onClick={handlePreviousBtn}
                            className="join-item btn btn-outline bg-primary hover:bg-secondary text-white">Previous page</button>

                        <button
                            onClick={handleNextBtn}
                            className="join-item btn btn-outline bg-primary hover:bg-secondary text-white" >Next</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MediaImages;