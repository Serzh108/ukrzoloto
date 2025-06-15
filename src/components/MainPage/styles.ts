import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  max-width: 1600px;   
  width: 100%;
  margin: 0 auto;
  margin-bottom: 16px; 
  background-color: #F2F2F2;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 48px; 
  margin-bottom: 40px; 

& p {
  font-family: 'MontserratSemiBold';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 32px;
  color: #000000;

  @media screen and (max-width: 430px) {
    font-size: 20px;
    line-height: 24px;
    width: 50%;
  }
}

& button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 169px;
  height: 48px;

  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  background: #FFFFFF;
  border: none;
  border-radius: 24px;
  cursor: pointer;
}
`;
