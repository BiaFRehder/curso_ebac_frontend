import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Calculadora de IMC</h1>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <a href="#form" className={styles.link} >Calcular</a>
                    </li>
                    <li className={styles.item}>
                        <a href="#result" className={styles.link} >Resultados</a>
                    </li>
                    <li className={styles.item}>
                        <a href="#table" className={styles.link} >Classificação</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;