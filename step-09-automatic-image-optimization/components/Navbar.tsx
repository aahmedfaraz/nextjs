import { NextComponentType } from 'next';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Navbar:NextComponentType = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><Link href='/'>Width and Height only</Link></li>
                <li><Link href='/with-layout-fixed'>Width and Height + Layout Fixed</Link></li>
                <li><Link href='/with-layout-intrinsic'>Width and Height + Layout Instrinsic</Link></li>
                <li><Link href='/with-layout-responsive'>Width and Height + Layout Responsive</Link></li>
                <li><Link href='/with-layout-fill'>Width and Height + Layout Fill</Link></li>
                <li><Link href='/with-object-fit-fill'>Width and Height + Object-Fit Fill</Link></li>
                <li><Link href='/with-object-fit-cover'>Width and Height + Object-Fit Cover</Link></li>
                <li><Link href='/with-object-fit-contain'>Width and Height + Object-Fit Contain</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;