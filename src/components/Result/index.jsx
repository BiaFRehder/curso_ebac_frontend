import styles from './Result.module.css';

const Result = ({ imc, classification, color }) => {
    if (!imc) return null;
    
    return (
        <div id='result' className="container">
            <div className={`${styles.content} ${color}`}>
                <h2 className={`${styles.title} ${color}`}>Seu IMC é {imc}kg/m²</h2>
                <p className={color}>Você está <span className={`${styles.result} ${color}`}>{classification}</span></p>
            </div>
        </div>
    )
}

export default Result;