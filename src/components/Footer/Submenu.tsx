import { type FC } from 'react';
import downBlackIcon from '/assets/icons/icon-down-black.svg';
import { ControlArrow, MenuList, SubmenuWrapper } from './styles';
import type { MenuProps } from '../../types';
import useCheckDeviceType from '../../hooks/hooks';

const SubMenu: FC<MenuProps> = ({ data, func, openedId }) => {
  const { id, title, items } = data;
  const { isMobile, isLaptop } = useCheckDeviceType();

  return (
    <SubmenuWrapper>
      <div onClick={() => isMobile && func(id)}>
        <p>{title}</p>
        <ControlArrow
          src={downBlackIcon}
          width={24}
          alt="down"
          $isOpen={openedId === id}
        />
      </div>
      <MenuList $isOpen={!isMobile || openedId === id}>
        {items &&
          items.length > 0 &&
          items.map((item, idx) => <li key={id + idx}>{item}</li>)}
      </MenuList>
    </SubmenuWrapper>
  );
};

export default SubMenu;
