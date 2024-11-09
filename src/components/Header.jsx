import { Fragment } from 'react';

const Header = () => {
    return (
        <nav className='navbar'>
            <div className="navbar__logo">Logo</div>
                <ul className='navbar__links'>
                    <li className='navbar__item'>
                        <a href="/" className='navbar__link'>
                        Accueil
                        </a>
                    </li>
                    <li className='navbar__item'>
                        <a href="/" className='navbar__link'>
                        Compètences
                        </a>
                    </li>
                    <li className='navbar__item'>
                        <a href="/" className='navbar__link'>
                        Portfolio
                        </a>
                    </li>
                    <li className='navbar__item'>
                        <a href="/" className='navbar__link'>
                        Contact
                        </a>
                    </li>
                </ul>
                <button className='menu__icon'>
                    <span className='menu-bar'></span>
                </button>
            </nav>
    );
};
export default Header;
