import { useState } from 'react';
import SubMenu from './Submenu';
import { MENU_DATA } from './menuData';
import {
  Contacts,
  ContactsBoldText,
  ContactsLightText,
  Description,
  Divider,
  FooterMenuWrapper,
  FooterSubWrapper,
  FooterWrapper,
} from './styles';

const Footer = () => {
  const [openedId, setOpenedId] = useState<string>('');
  const clickHandler = (id: string) => {
    setOpenedId(id === openedId ? '' : id);
  };

  return (
    <FooterWrapper>
      <FooterSubWrapper>
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
            MENU_DATA.map(el => (
              <SubMenu
                key={el.id}
                data={el}
                func={clickHandler}
                openedId={openedId}
              />
            ))}
        </FooterMenuWrapper>
        <Contacts>
          <div>
            <ContactsBoldText>0 800 000 222</ContactsBoldText>
            <ContactsLightText>Бесплатно по Украине</ContactsLightText>
            <ContactsBoldText>call@example.ua</ContactsBoldText>
          </div>
        </Contacts>
      </FooterSubWrapper>
    </FooterWrapper>
  );
};

export default Footer;
