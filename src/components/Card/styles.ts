import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  width: 307px;
  height: 490px;
  padding: 16px;
  border-radius: 16px;
  background-color: #fff;
`;

export const PromoCode = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 20px;
  margin-bottom: 6px;
  padding: 4px 8px;
  font-weight: 550;
  font-size: 10px;
  line-height: 10px;
  font-family: 'Helvetica'; 
  border-radius: 16px;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.08) 0%, #000000 100%), #DD2A00;
`;

export const ImgBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  height: 317px;
  margin-bottom: 8px;
  font-weight: 550;
  font-size: 10px;
  line-height: 10px;
  font-family: 'Helvetica'; 

  & div {
    display: flex;
    align-items: center;
    width: 63px;
    height: 20px;    
    padding-left: 26px;

    font-weight: 550;
    font-size: 10px;
    line-height: 20px;
    color: #FFFFFF;

    background: rgba(43, 39, 37, 0.24);
    border-radius: 16px;
    background-image: url('/assets/icons/icon-play-video.svg');
    background-repeat: no-repeat;
    background-position-x: 6px;
    background-position-y: center;
    cursor: pointer;
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  gap: 8px;
  width: auto;
  font-weight: 550;
  font-size: 10px;
  line-height: 10px;
  font-family: 'Helvetica'; 
`;

export const OrderBlock = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 4px;
  padding-left: 20px;
  font-weight: 550;
  font-size: 12px;
  line-height: 16px;
  color: #5D5FEF; 
  background-image: url('/assets/icons/icon-clock.svg');
  background-repeat: no-repeat;
  background-position:  0 center;
`;

export const ProductName = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;       /* скільки рядків залишити */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  font-family: 'Helvetica'; 
  text-align: left;
  color: #000;
`;

export const PriceBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  font-weight: 550;
  font-size: 10px;
  line-height: 10px;
  font-family: 'Helvetica'; 
`;

export const Discount = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;

  & div:first-child {
    padding: 2px 4px;
    font-weight: 700;
    font-size: 10px;
    line-height: 12px;
    border-radius: 16px;
    background: #FD3000;
  }

  & div:last-child {
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    text-decoration: line-through;
    color: #747474;
  }
`;

export const Price = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #000; 
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  & button {
    height: 43px;
    color: #fff; 
    background-color: #000;
    cursor: pointer;
  }
`;

export const ButtonBuy = styled.button`
  width: 77px; 
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  border: none;
  border-right: 1px solid #fff;
  border-bottom-left-radius: 24px; 
  border-top-left-radius: 24px;
`;

export const ButtonLike = styled.button`
  width: 48px;
  border: none;
  border-bottom-right-radius: 24px; 
  border-top-right-radius: 24px;
  background-image: url('/assets/icons/icon-favorites-add.svg');
  background-repeat: no-repeat;
  background-position: center;
`;
