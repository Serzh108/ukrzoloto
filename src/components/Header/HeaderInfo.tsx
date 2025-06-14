import searchIcon from '/assets/icons/icon-search.svg';
import downIcon from '/assets/icons/icon-down.svg';
import downWhiteIcon from '/assets/icons/icon-down-white.svg';
import heartIcon from '/assets/icons/icon-heart.svg';
import viewIcon from '/assets/icons/icon-view.svg';
import basketIcon from '/assets/icons/icon-basket.svg';
import { Cabinet, Catalog, HeaderInfoWrapper, Phone, Search } from './styles';

const HeaderInfo = () => {
  return (
    <HeaderInfoWrapper>
      <Catalog>
        <p>Каталог товарів</p>
        <img src={downWhiteIcon} width={24} alt="catalog down" />
      </Catalog>
      <Phone>
        <div>
          <p>0 800 000 222</p>
          <p>Бесплатно по Украине</p>
        </div>
        <img src={downIcon} width={24} alt="down" />
      </Phone>
      <Search>
        <input placeholder="Наприклад, кільце з діамантом" />
        <img src={searchIcon} width={24} alt="search" />
      </Search>
      <Cabinet>
        <button>Войти в кабинет</button>
        <div></div>
        <button>
          <img src={heartIcon} width={24} alt="heart" />
        </button>
        <button>
          <img src={viewIcon} width={24} alt="view" />
        </button>
        <button>
          <img src={basketIcon} width={24} alt="basket" />
        </button>
      </Cabinet>
    </HeaderInfoWrapper>
  );
};

export default HeaderInfo;
