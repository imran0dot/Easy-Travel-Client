import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import PackageCard from "@components/base/PackageCard";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const PackageSlider = ({data}) => {
    const swiperBreakpoints = {
        640: {
            slidesPerView: 1.2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2.3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3.3,
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
            navigation={true}
            pagination={{
                dynamicBullets: true,
                clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper custom-swiper"
        >
            {
                data?.map((x, i) => <SwiperSlide key={i}><PackageCard /></SwiperSlide>)
            }
        </Swiper>
    );
};

export default PackageSlider;