import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';
import Card from '../Card/Card';
import { TEMP_DATA } from './tempData';

// interface ICard {
//   promo: string;
//   image: string;
//   order: string;
//   name: string;
//   discount: string;
//   discount_amount: string;
//   price: string;
// }
// const TEMP_DATA: (ICard | undefined)[] = [
//   {
//     promo: '-60% з ПРОМОкодом',
//     image: '/public/assets/images/image1.jpg',
//     order: 'Під замовлення (до 2 тижнів)',
//     name: 'Колье-трансформер c сердоликом, цитрином и родолитом Тоффи на aaaaaaaa ssss ddddddd fff gggg rrrg',
//     discount: '-52%',
//     discount_amount: '1 104 432',
//     price: '3 637 432',
//   },
//   {
//     promo: '-60% з ПРОМОкодом',
//     image: '/public/assets/images/image2.jpg',
//     order: 'Під замовлення (до 2 тижнів)',
//     name: 'Колье-трансформер c сердоликом, цитрином и родолитом Тоффи на aaaaaaaa ssss ddddddd fff gggg rrrg',
//     discount: '-52%',
//     discount_amount: '1 104 432',
//     price: '3 637 432',
//   },
//   ,
//   {
//     promo: '-60% з ПРОМОкодом',
//     image: '/public/assets/images/image1.jpg',
//     order: 'Під замовлення (до 2 тижнів)',
//     name: 'Колье-трансформер c сердоликом, цитрином и родолитом Тоффи на aaaaaaaa ssss ddddddd fff gggg rrrg',
//     discount: '-52%',
//     discount_amount: '1 104 432',
//     price: '3 637 432',
//   },
//   ,
//   {
//     promo: '-60% з ПРОМОкодом',
//     image: '/public/assets/images/image1.jpg',
//     order: 'Під замовлення (до 2 тижнів)',
//     name: 'Колье-трансформер c сердоликом, цитрином и родолитом Тоффи на aaaaaaaa ssss ddddddd fff gggg rrrg',
//     discount: '-52%',
//     discount_amount: '1 104 432',
//     price: '3 637 432',
//   },
//   ,
//   {
//     promo: '-60% з ПРОМОкодом',
//     image: '/public/assets/images/image1.jpg',
//     order: 'Під замовлення (до 2 тижнів)',
//     name: 'Колье-трансформер c сердоликом, цитрином и родолитом Тоффи на aaaaaaaa ssss ddddddd fff gggg rrrg',
//     discount: '-52%',
//     discount_amount: '1 104 432',
//     price: '3 637 432',
//   },
//   ,
//   {
//     promo: '-60% з ПРОМОкодом',
//     image: '/public/assets/images/image1.jpg',
//     order: 'Під замовлення (до 2 тижнів)',
//     name: 'Колье-трансформер c сердоликом, цитрином и родолитом Тоффи на aaaaaaaa ssss ddddddd fff gggg rrrg',
//     discount: '-52%',
//     discount_amount: '1 104 432',
//     price: '3 637 432',
//   },
//   ,
//   {
//     promo: '-60% з ПРОМОкодом',
//     image: '/public/assets/images/image1.jpg',
//     order: 'Під замовлення (до 2 тижнів)',
//     name: 'Колье-трансформер c сердоликом, цитрином и родолитом Тоффи на aaaaaaaa ssss ddddddd fff gggg rrrg',
//     discount: '-52%',
//     discount_amount: '1 104 432',
//     price: '3 637 432',
//   },
//   {
//     promo: '-60% з ПРОМОкодом',
//     image: '/public/assets/images/image1.jpg',
//     order: 'Під замовлення (до 2 тижнів)',
//     name: 'Колье-трансформер c сердоликом, цитрином и родолитом Тоффи на aaaaaaaa ssss ddddddd fff gggg rrrg',
//     discount: '-52%',
//     discount_amount: '1 104 432',
//     price: '3 637 432',
//   },
// ];

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
      {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>
        <Card />
      </SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide> */}
      {TEMP_DATA &&
        TEMP_DATA.length > 0 &&
        TEMP_DATA.map(item => (
          <SwiperSlide>
            <Card key={item?.name} data={item} />
            {/* {item} */}
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default ActionSwiper;
