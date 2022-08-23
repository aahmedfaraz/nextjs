import { NextComponentType } from "next";
import Link from "next/link";

const Navbar : NextComponentType = () => {
    return (
        <nav>
            <Link href={'/'} passHref><a>Counter CSR</a></Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link href={'/staticsidecounter'} passHref><a>Counter SSG</a></Link>
        </nav>
    )
}

export default Navbar;