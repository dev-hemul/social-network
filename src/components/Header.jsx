import React from 'react';
import logo from './../x.png';
import s from './Header.module.css';

const Header = () => {
return (
	<header className={s.header}>
		<img src={logo} alt=""/>
	</header>
)
}

export default Header;