import Container from '@components/base/Container';
import 'swiper/css';
import 'swiper/css/effect-cards';
import bgImage from '@/assets/images/para.jpg'
import img from '@/assets/images/river.jpeg'
import Title from '@components/base/Title';

const Informations = () => {
    const styled = {
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.376), rgba(0, 0, 0, 0.376)), url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        position: "relative",
    }

    return (
        <div 
        style={styled} 
        // className='bg-secondary bg-opacity-60'
        >
            <Container>
                <div className='grid lg:grid-cols-2 gap-10 py-20 items-center justify-center'>
                    <div>
                        <img src={img} className='rounded-lg' alt="" />
                    </div>

                    <div className='text-white flex flex-col gap-4 items-start text-lg'>
                        <Title title="Adventure Travel" subTitle="" className="text-white" />
                        <p className=''>Are you tired of the typical tourist destinations and looking to step out of your comfort zone? Adventure travel may be the perfect solution for you! Here are four reasons why you should book an adventure travel experience :</p>

                        <div className='flex flex-col gap-2'>
                            <li>Connect with nature</li>
                            <li>Experience other cultures</li>
                            <li>Create unforgettable memories</li>
                        </div>
                        <button className='btn btn-outline border-white text-white'>MORE ABOUT US</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Informations;