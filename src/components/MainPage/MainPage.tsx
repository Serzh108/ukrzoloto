import ActionSwiper from './ActionSwiper';
import { Title, Wrapper } from './styles';
import arrowRight from '/assets/icons/icon-arrow-right.svg';

const MainPage = () => {
  return (
    <Wrapper>
      <Title>
        <p>Вироби, що беруть участь в акції</p>
        <button>
          Переглянути всі
          <img src={arrowRight} width={24} alt="arrow right" />
        </button>
      </Title>
      <ActionSwiper />
    </Wrapper>
  );
};

export default MainPage;
