// import bgImage from '@/assets/images/girl.jpeg'
import bgImage from '@/assets/images/paraHero.jpg'
import Container from '@components/base/Container';
import { bgStyled } from '@components/style';
const Hero = () => {
    const bgStyle = bgStyled(bgImage);

    return (
        <div style={bgStyle} >
            <div className='lg:min-h-[600px] flex flex-col justify-center'>
                <Container>
                    <div className='grid lg:grid-cols-2 justify-center items-center py-20'>
                        <div className='my-5 text-white'>
                            <h1 className='lg:text-7xl text-4xl uppercase font-bold font-sans'>
                                Provideing <span className='font-newFont text-tertiary '><br />Inspiration <br /></span> abroad</h1>
                            <p className='lg:text-xl mt-5'>Giving you the opportunity to give back, lear and grow as you expeience some of the most amazing places on earth.</p>
                        </div>

                        <div>

                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Hero;