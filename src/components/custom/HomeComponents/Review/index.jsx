import Title from "@components/base/Title";
import Container from "@components/base/Container";
import ReviewCard from "@components/base/ReviewCard";
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { FreeMode, Navigation, Pagination } from 'swiper/modules';

const Review = () => {

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
            slidesPerView: 2.3,
            spaceBetween: 25,
        },
        1440: {
            slidesPerView: 2.4,
            spaceBetween: 30,
        },
    };

    return (
        <div className="my-10">
            <Container>
                <Title title="Inspirational Stories" subTtile="from our participants" />

                <div>
                    <Swiper
                        spaceBetween={30}
                        freeMode={true}
                        breakpoints={swiperBreakpoints}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination, Navigation]}
                        className="mySwiper"
                    >
                            <SwiperSlide><ReviewCard /></SwiperSlide>
                            <SwiperSlide><ReviewCard /></SwiperSlide>
                            <SwiperSlide><ReviewCard /></SwiperSlide>
                            <SwiperSlide><ReviewCard /></SwiperSlide>
                    </Swiper>
                </div>
            </Container>

        </div>
    );
};

export default Review;