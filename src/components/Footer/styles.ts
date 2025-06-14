import styled from 'styled-components';

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  gap: 40px;
  width: 100%;   
  max-width: 1600px;
  padding: 32px 0;
  margin: 0 auto;
  color: #000; 
  background-color: #fff; 
 `;

export const Description = styled.p`
  width: 344px;
  text-align: left;
  font-family: 'Roboto Flex';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #747474;
`;

export const Divider = styled.div`
  width: 1px;
  height: 312px;
  background: rgba(0, 0, 0, 0.08);
`;


export const FooterMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 24px 80px;
  width: 100%;   
  height: 312px;
`;

export const SubmenuWrapper = styled.div`
  & div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
  }

  & p {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      text-align: left;
      line-height: 24px;
      color: #000000;
  }
`;

export const ControlArrow = styled.img<{ $isOpen: boolean }>`
  transform: rotate(${({ $isOpen }) => $isOpen ? '180deg' : '0deg'});
  
  @media screen and (min-width: 320px) {
    display: none;
  }
`;

export const MenuList = styled.ul<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 16px;
  height: ${({ $isOpen }) => $isOpen ? 'auto' : 0};
  margin-top: 8px;
  overflow: hidden;
  transition: height 0.3s;

& li {
  font-family: 'Roboto Flex';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #747474;
}
`;

export const Contacts = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px 16px 24px;
gap: 16px;

  width: 188px;
  height: 233px;
  background: #F2F2F2;
  border-radius: 16px;
`;

export const ContactsBoldText = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;

export const ContactsLightText = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #747474;
`;