import logo from '../../assets/images/logo.svg';
import { useEffect, useRef, useState } from 'react';
import './navbar.css';
import { InputForm } from '../InputForm';
import { AvatarIcon, CardIcon, DropDownIcon, HamburgerIcon, NextIcon, SearchIcon } from '../icons';

interface Link {
  href: string;
  text: string;
  subLinks?: Link[];
}

interface NavBarProps {
  navLinks?: Link[];
  isNavbarIconVisible?: boolean;
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

const NavBar = ({ navLinks = defaultLinks }: NavBarProps) => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isLinksVisible, setLinksVisible] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleLinks = () => {
    setMenuVisible((prevState) => !prevState);
    setLinksVisible(false);
  };

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setLinksVisible(!isLinksVisible);
    setActiveLink(href);
  };

  const handleKeyDown = (event: React.KeyboardEvent<SVGSVGElement>, callback: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      callback();
    }
    if(event.key === 'Escape' && isMenuVisible){
      callback();
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (isMenuVisible && menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuVisible]);

  const renderLinks = (links: Link[], linkType: string) => (
    <ul className={`${linkType}__items`}>
      {links.map((link, index) => {
        const hasSubLinks = link.subLinks && link.subLinks.length > 0;
        return (
          <li key={index} className={`${linkType}__item`}>
            <a
              href='#'
              className={`${linkType}__link ${link.href === activeLink ? 'active' : ''}`}
              {...(hasSubLinks ? { 'aria-expanded': isLinksVisible } : {})}
              onClick={hasSubLinks ? (event) => handleLinkClick(event, link.href) : undefined}
            >
              {link.text}
              {hasSubLinks && <NextIcon className='next-icon' />}
              {hasSubLinks && <DropDownIcon width={11} height={6} className='dropdown-icon' />}
            </a>
            {isLinksVisible && hasSubLinks && renderLinks(link.subLinks || [], 'submenu')}
          </li>
        );
      })}
    </ul>
  );

  return (
    <nav className='navbar'>
      <div className='navbar-wrapper' ref={menuRef}>
        <div className='navbar__top'>
          <HamburgerIcon
            className={`navbar__toggle-icon ${isMenuVisible ? 'highlighted' : ''}`}
            isExpanded={isMenuVisible}
            onClick={toggleLinks}
            role='button'
            onKeyDown={(event) => handleKeyDown(event, toggleLinks)}
          />
          <a href='#'>
            <img src={logo} alt='logo' className='navbar__logo' />
          </a>
        </div>

        <div className={`navbar_menu ${isMenuVisible ? '' : 'hide'}`}>
          {renderLinks(navLinks, 'navbar')}
        </div>
      </div>

      <InputForm
        Icon={SearchIcon}
        customClassNames='search-form'
        placeholder='Search for products...'
      />
      <div className='navbar__icon'>
        <SearchIcon className='search-icon' />
        <CardIcon width={24} height={24} />
        <AvatarIcon width={24} height={24} />
      </div>
    </nav>
  );
};

export default NavBar;
