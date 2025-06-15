import shevronRight from '/assets/icons/icon-right-shevron.svg';
import shevronDown from '/assets/icons/icon-down-shevron.svg';
import flag from '/assets/icons/flag.svg';
import MenuHeader from './MenuHeader';
import HeaderInfo from './HeaderInfo';
import {
  HeaderDiscount,
  HeaderNav,
  // HeaderWrapper,
  LanguageSelect,
} from './styles';
import MobileMenu from './MobileMenu';

const Header = () => {
  return (
    // <HeaderWrapper>
    <>
      <HeaderDiscount>
        <p>⭐ Знижка -53% на пару обручок тут</p>
        <img src={shevronRight} width={24} alt="arrow right" />
      </HeaderDiscount>
      <HeaderNav>
        <LanguageSelect>
          <img src={flag} width={24} alt="flag" />
          <p>Українська</p>
          <img src={shevronDown} width={16} alt="flag" />
        </LanguageSelect>
        <MenuHeader />
      </HeaderNav>
      <HeaderInfo />
      <MobileMenu />
    </>

    // </HeaderWrapper>
  );
};

export default Header;
