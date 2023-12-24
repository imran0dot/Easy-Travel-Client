import axios from "axios";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";

const ImagePopUp = () => {
    const [images, setImages] = useState([]);
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
        axios(`http://localhost:3500/image-upload?skip=${skip}`).then(res => setImages(res.data));
    }, [skip])

    return (
        <div className='bg-white border p-3 rounded-md shadow-md absolute left-0 right-0 top-0 bottom-0 z-40'>
            <div className="relative p-14">
                <RxCross2 className="absolute right-0 top-2 text-4xl" />
                <div className="grid grid-cols-5 gap-2">
                    {
                        images.map((image) => {
                            return (
                                <div key={image._id} className="border border-primary p-3 rounded-sm">
                                    <img src={image.url} alt="" />
                                </div>
                            )
                        })
                    }
                </div>

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

export default ImagePopUp;