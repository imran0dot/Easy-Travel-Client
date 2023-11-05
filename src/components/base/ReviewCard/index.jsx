import userImg from "@/assets/images/user.png"
import ReactStars from "react-rating-stars-component";

const ReviewCard = () => {
    return (
        <div className='shadow-lg border rounded-lg p-5 flex flex-col gap-3'>
                <ReactStars
                    value={5}
                    edit={false}
                    size={24}
                    activeColor="#ffd700"
                />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sunt ipsa error exercitationem voluptas nostrum recusandae, quasi ab corporis praesentium libero! Dolorem, ab saepe. Cupiditate placeat dolorum dolorem vero hic quia. Placeat repellendus maiores doloribus commodi necessitatibus nulla repudiandae officiis!</p>
            <div className="flex justify-start items-center gap-4">
                <div className="w-2/12">
                    <img src={userImg} alt="" />
                </div>
                <div>
                    <h5 className='font-bold'>EMMA JOHNSON</h5>
                    <p className='text-sm'>Tangail, Bangladesh</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;