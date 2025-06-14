import type { FC } from 'react';
import type { CardProps } from '../../types';
import {
  ButtonBuy,
  ButtonLike,
  ButtonWrapper,
  CardWrapper,
  Discount,
  ImgBlock,
  InfoBlock,
  OrderBlock,
  Price,
  PriceBlock,
  ProductName,
  PromoCode,
} from './styles';

const Card: FC<CardProps> = ({ data }) => {
  const { promo, image, order, name, discount, discount_amount, price } = data;

  return (
    <CardWrapper>
      <PromoCode>{promo}</PromoCode>
      <ImgBlock>
        <img src={image} alt="image1" />
        <div>Відео</div>
      </ImgBlock>
      <InfoBlock>
        <OrderBlock>{order}</OrderBlock>
        <ProductName>{name}</ProductName>
        <PriceBlock>
          <div>
            <Discount>
              <div>{discount}</div>
              <div>{discount_amount}</div>
            </Discount>
            <Price>{price} грн</Price>
          </div>
          <ButtonWrapper>
            <ButtonBuy>Купить</ButtonBuy>
            <ButtonLike />
          </ButtonWrapper>
        </PriceBlock>
      </InfoBlock>
    </CardWrapper>
  );
};
export default Card;
