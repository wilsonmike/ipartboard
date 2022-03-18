import React, {useEffect, useState} from 'react'
import classes from './Header.module.scss'

import {BiMenuAltRight} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';
import { Link, useHistory } from 'react-router-dom';


const Header = () => {
    const history = useHistory();
    const [menuOpen, setMenuOpen] = useState(false);
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

    const ctaClickHandler = () => {
        menuToggleHandler();
        history.push("/testing-push")
    }

    return (
    <header className={classes.header}>
        <div className={classes.header__content}>
            <Link to="/" className={classes.header__content__logo}>navbar</Link>
       
        <nav className={`${classes.header__content__nav} ${menuOpen && size.width < 768 ? classes.isMenu : "" }`}>
            <ul>
                <li>
                    <Link to="/artwork" onClick={menuToggleHandler}>Artwork</Link>
                </li>
                <li>
                    <a href="/" onClick={menuToggleHandler}>PageTwo</a>
                </li>
                <li>
                    <a href="/" onClick={menuToggleHandler}>PageThree</a>
                </li>
            </ul>
            <button onClick={ctaClickHandler}>CTA</button>
        </nav>
        <div className={classes.header__content__toggle}>
            {!menuOpen ? <BiMenuAltRight onClick={menuToggleHandler} /> : <AiOutlineClose onClick={menuToggleHandler} />}
        </div>
        </div>
    </header>
  )
}

export default Header