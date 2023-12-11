import ReadMore from '../ReadMore';

const PackageCard = ({item}) => {
    const {featureImage, title, _id} = item;
    const styled = {
        'backgroundImage': `url(${featureImage})`,
        'backgroundPosition': 'center',
        'backgroundSize': 'cover'
    }
    return (
        <div className="my-10">
            <div style={styled} className='min-h-[33rem] md:min-h-[25rem] relative rounded-lg cursor-pointer group overflow-hidden'>
                <div className='min-h-[33rem] md:min-h-[25rem] bg-gradient-to-t from-secondary to-primary bg-opacity-90 p-5 text-white absolute mt-[90%] group-hover:mt-0 transition-all rounded-lg w-full'>

                    <h4 className='text-2xl font-bold text-white bottom-10 left-10'>{title}</h4>

                    <div className='hidden group-hover:flex transition-all flex-col gap-3 items-start mt-5'>
                        <ReadMore href={`tourist-visa/${_id}`}>Read More</ReadMore>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PackageCard;