// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, EffectFade, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default () => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
    spaceBetween={50}
    slidesPerView={1}
    autoplay={{
      delay: 200,
      pauseOnMouseEnter: false,
    }}
    effect='fade'
    fadeEffect={{crossFade: true}}
    onSlideChange={(swiper) =>
      isNaN(swiper.realIndex) && swiper.slideTo(0)
    }
    onSwiper={(swiper) => console.log(swiper)}
      
    >
      <SwiperSlide>
        <img src="/images/10.avif" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/11.avif" alt="" />
      </SwiperSlide>
    </Swiper>
      
  );
};
