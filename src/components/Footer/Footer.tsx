// import { useState } from 'react';
import SubMenu from './Submenu';
import { MENU_DATA } from './menuData';
import {
  Contacts,
  ContactsBoldText,
  ContactsLightText,
  Description,
  Divider,
  FooterMenuWrapper,
  FooterWrapper,
} from './styles';

const Footer = () => {
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <FooterWrapper>
      <div>
        <Description>
          Интернет-магазин ювелирных изделий.
          <br /> Доступные цены, скидки гарантия качества,
          <br /> доставка и возврат по всей Украине.
        </Description>
      </div>
      <Divider />
      <FooterMenuWrapper>
        {MENU_DATA &&
          MENU_DATA.length > 0 &&
          MENU_DATA.map(el => <SubMenu key={el.id} data={el} />)}
      </FooterMenuWrapper>
      <Contacts>
        <div>
          <ContactsBoldText>0 800 000 222</ContactsBoldText>
          <ContactsLightText>Бесплатно по Украине</ContactsLightText>
          <ContactsBoldText>call@example.ua</ContactsBoldText>
        </div>
      </Contacts>
    </FooterWrapper>
  );
};

export default Footer;
