import HamburgerIcon from '../icons/HamburgerIcon';
import logo from '../../assets/images/logo.svg';
import { useState } from 'react';
import './navbar.css';
import NextIcon from '../icons/NextIcon';
import SearchIcon from '../icons/SearchIcon';
import CardIcon from '../icons/CardIcon';
import AvatarIcon from '../icons/AvatarIcon';
import DropDownIcon from '../icons/DropDownIcon';
import { InputForm } from '../InputForm';

interface Link {
  href: string;
  text: string;
  subLinks?: Link[];
}

interface NavBarProps {
  navLinks?: Link[];
  isHamburger?: boolean;
}

const defaultLinks: Link[] = [
  {
    href: '/shop',
    text: 'Shop',
    subLinks: [
      { href: '/men', text: 'Men' },
      { href: '/women', text: 'Women' }
    ]
  },
  { href: '/sale', text: 'On Sale' },
  { href: '/new', text: 'New Arrivals' },
  { href: '/brands', text: 'Brands' }
];

const NavBar = ({ navLinks = defaultLinks, isHamburger = false }: NavBarProps) => {
  const [isMenuVisible, setMenusVisible] = useState(!isHamburger);
  const [isLinksVisible, setLinksVisible] = useState(false);
  const [isSearchFormVisible, setSearchFormVisible] = useState(false);

  const toggleLinks = () => setMenusVisible((prevState) => isHamburger && !prevState);

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setLinksVisible(!isLinksVisible);
  };

  const handleSearchIconClick = () => {setSearchFormVisible(!isSearchFormVisible)};

  const renderLinks = (links: Link[], linkType: string) => (
    <ul className={`${linkType}__items ${isHamburger ? 'column' : 'row'}`}>
      {links.map((link, index) => {
        const hasSubLinks = link.subLinks && link.subLinks.length > 0;
        return (
          <li key={index} className={`${linkType}__item`}>
            <a
              href={link.href}
              className={`${linkType}__link`}
              onClick={(event) => handleLinkClick(event)}
            >
              {link.text}
              {isHamburger && hasSubLinks && <NextIcon />}
              {!isHamburger && hasSubLinks && (
                <DropDownIcon width={11} height={6} />
              )}
            </a>
            {isLinksVisible && hasSubLinks && renderLinks(link.subLinks || [], 'submenu')}
          </li>
        )
      })}
    </ul>
  );

  return (
    <nav className={`navbar`}>
      <div className='navbar-wrapper'>
        <div className='navbar__top'>
          {isHamburger && <HamburgerIcon className='navbar__icon' onClick={toggleLinks} />}
          <a href='/about'>
            <img src={logo} alt='logo' className='navbar__logo' />
          </a>
        </div>

        {isMenuVisible && <div className='navbar__menu'>{renderLinks(navLinks, 'navbar')}</div>}
      </div>

      <div className='navbar__icon'>
        {isHamburger && !isSearchFormVisible && <SearchIcon onClick={handleSearchIconClick} />}
        {(!isHamburger || isSearchFormVisible) && <InputForm Icon={SearchIcon} placeholder='Search for products...' />}
        <CardIcon width={24} height={24}/>
        <AvatarIcon width={24} height={24}/>
      </div>
    </nav>
  );
};

export default NavBar;
