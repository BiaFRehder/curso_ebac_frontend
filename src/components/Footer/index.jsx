import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.text}>
                by
                <a className={styles.link} target="_blank" href="https://github.com/BiaFRehder"> Bianca Fucuda Rehder </a>
                - 2025
            </p>
        </footer>
    )
}

export default Footer;