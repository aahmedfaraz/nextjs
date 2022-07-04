import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { ReactElement } from 'react';

interface Props {
    children: ReactElement
}

const HorizontalContainer:NextPage<Props> = ({children}) => {
    return (
        <div className={styles.horizontal}>
            {children}
        </div>
    );
}

export default HorizontalContainer;