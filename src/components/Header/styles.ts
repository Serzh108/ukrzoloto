import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  margin-bottom: 16px; 
`;

export const HeaderDiscount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px; 
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
  background-color: #000;
`;

export const HeaderNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0 110px;

/* font-family: 'Roboto Flex'; */
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #000000;

  background-color: #fff; 
`;

export const LanguageSelect = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 8px;
  & p {
    margin-left: 16px;
    margin-right: 24px;
  }
`;

export const HeaderMenu = styled.ul`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 8px;

  & li {
    padding: 8px;
    border-radius: 16px;
    cursor: pointer;
  }

  & li:hover {
  background: rgba(221, 42, 0, 0.08);
}
`;

export const HeaderInfoWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 64px;
  gap: 24px;
  padding-left: 110px;
  background-color: #DD2A00; 
`;

export const Catalog = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 338px;
  height: 48px;
  padding: 0 12px 0 48px;
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 550;
  font-size: 14px;
  line-height: 16px;
  text-align: left;
  color: #FFFFFF;
  border-radius: 24px;
  border: none;
  background: #000000;
  background-image: url('/assets/icons/icon-catalog.svg');
  background-repeat: no-repeat;
  background-position: 16px center;
  cursor: pointer;
`;

export const Phone = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 8px;
  text-align: left;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #F2F2F2;

  & p:first-of-type {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #FFFFFF;
  }
`;

export const Search = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
 
  & input {
    padding: 12px 8px 12px 16px;
    width: 690px;
    height: 48px;
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #747474;
    background: #FFFFFF;
    border-radius: 24px;
    border: none;
    outline: none;
  }
    & img {
      position: relative;
      left: -36px;
      cursor: pointer;
    }
`;

export const Cabinet = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 8px;

  & button {
    width: 40px;
    height:40px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  & button:first-of-type  {
    width: 104px;
    padding-left: 36px;
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    background-image: url('/assets/icons/icon-profile.svg');
    background-repeat: no-repeat;
    background-position: 4px center;
  }

  & div {
    width: 1px;
    height: 24px;
    padding: 8px 0px;
    background-color: #fff;
  }
`;

