import bgImg from '@/assets/images/para.jpg'
import ReadMore from '../ReadMore';

const PackageCard = () => {
    const styled = {
        'backgroundImage': `url(${bgImg})`,
        'backgroundPosition': 'center',
        'backgroundSize': 'cover'
    }
    return (
        <div className="my-10">
            <div style={styled} className='min-h-[33rem] md:min-h-[25rem] relative rounded-lg cursor-pointer group overflow-hidden'>
                <div className='min-h-[33rem] md:min-h-[25rem]  bg-gradient-to-b from-transparent to-quaternary bg-opacity-100 p-5 text-white absolute mt-[90%] group-hover:mt-0 transition-all rounded-lg w-full'>

                    <h4 className='text-3xl font-bold text-white bottom-10 left-10'>Japan</h4>

                    <div className='hidden group-hover:flex transition-all flex-col gap-3 items-start mt-5'>
                        <p className='font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, vel.</p>
                        <ReadMore>Read More</ReadMore>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PackageCard;