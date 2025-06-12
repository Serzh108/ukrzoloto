// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import './styles.css';
// import viteLogo from '/favicon.ico';
// import Card from '../Card/Card';
import ActionSwiper from './ActionSwiper';
import { Title, Wrapper } from './styles';
import arrowRight from '/assets/icons/icon-arrow-right.svg';

const MainPage = () => {
  return (
    <Wrapper>
      <Title>
        <p>Вироби, що беруть участь в акції</p>
        <button>
          Переглянути всі
          <img src={arrowRight} width={24} alt="arrow right" />
        </button>
      </Title>

      {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}

      <ActionSwiper />

      {/* <Swiper
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
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}
    </Wrapper>
  );
};

export default MainPage;
