import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import ArchiveCard from '../../base/ArchiveCard';

const PackageSlider = ({ data }) => {
    const swiperBreakpoints = {
        340: {
            slidesPerView: 1.7,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3.3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4.1,
            spaceBetween: 25,
        },
        1440: {
            slidesPerView: 4.4,
            spaceBetween: 30,
        },
    };
    return (
        <Swiper
            breakpoints={swiperBreakpoints}
            pagination={{
                dynamicBullets: true,
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper custom-swiper"
        >
            {
                data?.map((item, i) => <SwiperSlide key={i}>
                    {/* <PackageCard item={item} /> */}
                    <ArchiveCard rout={'tourist-visa'} data={item} />
                </SwiperSlide>)
            }
        </Swiper>
    );
};

export default PackageSlider;