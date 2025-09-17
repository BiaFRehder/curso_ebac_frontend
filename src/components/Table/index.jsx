import styles from './Table.module.css';

const Table = () => {
    return (
        <div id='table' className='container'>
            <div className={styles.content}>
                <h2 className={styles.title}>Classificação de IMC</h2>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <td className={styles.colHead}>IMC (kg/m²)</td>
                            <td className={styles.colHead}>Classificação</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={styles.col}>&lt; 18.5</td>
                            <td className={`${styles.col} ${styles.color_1}`}>Abaixo do peso</td>
                        </tr>
                        <tr>
                            <td className={styles.col}>18.5 - 24.9</td>
                            <td className={`${styles.col} ${styles.color_2}`}>Peso normal</td>
                        </tr>
                        <tr>
                            <td className={styles.col}>25.0 - 29.9</td>
                            <td className={`${styles.col} ${styles.color_3}`}>Acima do peso</td>
                        </tr>
                        <tr>
                            <td className={styles.col}>30.0 - 34.9</td>
                            <td className={`${styles.col} ${styles.color_4}`}>Obesidade grau I</td>
                        </tr>
                        <tr>
                            <td className={styles.col}>35.0 - 39.9</td>
                            <td className={`${styles.col} ${styles.color_5}`}>Obesidade grau II</td>
                        </tr>
                        <tr>
                            <td className={styles.col}>&ge; 40.0</td>
                            <td className={`${styles.col} ${styles.color_6}`}>Obesidade grau III</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;