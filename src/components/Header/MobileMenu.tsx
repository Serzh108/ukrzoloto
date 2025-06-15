import catalogBlackIcon from '/assets/icons/icon-catalog-black.svg';
import searchBlackIcon from '/assets/icons/icon-search-black.svg';
import menu4Icon from '/assets/icons/icon-menu4.svg';
import { MobileMenuWrapper } from './styles';

const MobileMenu = () => {
  return (
    <MobileMenuWrapper>
      <img src={catalogBlackIcon} width={24} alt="catalog Icon" />
      <div>
        <img src={searchBlackIcon} width={24} alt="search Icon" />
        <img src={menu4Icon} width={24} alt="menu Icon" />
      </div>
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
