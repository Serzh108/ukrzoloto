import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';
import Card from '../Card/Card';
import { TEMP_DATA } from './tempData';

const ActionSwiper = () => {
  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={5}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={swiper => console.log(swiper)}
      pagination={{
        type: 'fraction',
        renderFraction: (currentClass, totalClass) => {
          return `<span class="${currentClass}"></span> з <span class="${totalClass}"></span>`;
        },
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper">
      {TEMP_DATA &&
        TEMP_DATA.length > 0 &&
        TEMP_DATA.map(item => (
          <SwiperSlide key={item?.name}>
            <Card data={item} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default ActionSwiper;
