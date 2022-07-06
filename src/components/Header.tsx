import styles from '../components/Header.module.css'

import ignitelogo from '../assets/ignite-logo.svg';

export function Header() {
    return (
        <header className={styles.header}>Ignite Feed
            <img src={ignitelogo} alt="logo do ignite" />
        </header>
    );
}