import { useContext } from "react";
import { NextComponentType } from "next";
import Link from "next/link";
import styles from '../styles/Home.module.css';
import ThemeContext from "./themeContext";

const Navbar:NextComponentType = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    const newThemeName = theme === 'dark' ? 'light' : 'dark'

    return (
        <nav className={styles.nav}>
            <a href="https://github.com/aahmedfaraz" target="_blank"><h1>Ahmed Faraz &reg;</h1></a>
            <ul>
                <Link href={'/'}>Home</Link>
                <Link href={'/about'}>About</Link>
                <Link href={'/contacts'}>Contacts</Link>
                <button
                    onClick={toggleTheme}
                >
                    Set {newThemeName} theme
                </button>
            </ul>
        </nav>
    )
}

export default Navbar;