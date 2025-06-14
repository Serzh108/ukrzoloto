import { useState, type FC } from 'react';
import downBlackIcon from '/assets/icons/icon-down-black.svg';
import { ControlArrow, MenuList, SubmenuWrapper } from './styles';
import type { MenuProps } from '../../types';

const SubMenu: FC<MenuProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const { id, title, items } = data;
  return (
    <SubmenuWrapper>
      <div onClick={() => setIsOpen(prev => !prev)}>
        {/* <p>О нас</p> */}
        <p>{title}</p>
        <ControlArrow
          src={downBlackIcon}
          width={24}
          alt="down"
          $isOpen={isOpen}
        />
      </div>
      <MenuList $isOpen={isOpen}>
        {items &&
          items.length > 0 &&
          items.map((item, idx) => <li key={id + idx}>{item}</li>)}
      </MenuList>
    </SubmenuWrapper>
  );
};

export default SubMenu;
