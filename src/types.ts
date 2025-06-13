export interface ICard {
  promo: string;
  image: string;
  order: string;
  name: string;
  discount: string;
  discount_amount: string;
  price: string;
}

export type CardProps = {
  data: ICard;
};