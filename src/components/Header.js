import React, {useEffect, useState} from 'react'
import classes from './Header.module.scss'

import {BiMenuAltRight} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(true);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });   
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [])

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen])

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    }

    return (
    <header className={classes.header}>
        <div className={classes.header__content}>
            <h2 className={classes.header__content__logo}>navbar</h2>
       
        <nav className={`${classes.header__content__nav} ${menuOpen && size.width < 768 ? classes.isMenu : "" }`}>
            <ul>
                <li>
                    <a href="/">PageOne</a>
                </li>
                <li>
                    <a href="/">PageTwo</a>
                </li>
                <li>
                    <a href="/">PageThree</a>
                </li>
            </ul>
            <button>CTA</button>
        </nav>
        <div className={classes.header__content__toggle}>
            {!menuOpen ? <BiMenuAltRight onClick={menuToggleHandler} /> : <AiOutlineClose onClick={menuToggleHandler} />}
        </div>
        </div>
    </header>
  )
}

export default Header