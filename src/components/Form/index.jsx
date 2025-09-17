import { useState } from 'react';
import styles from './Form.module.css';

const Form = ({ setImc, setClassification, setColor }) => {
    const [weigth, setWeigth] = useState('');
    const [height, setHeight] = useState('');
    const [errWeigth, setErrWeigth] = useState('');
    const [errHeight, setErrHeight] = useState('');

    const handleInput = (e) => {
        let value = e.target.value.replace(/\D/g, ""); 

        if (value.length > 3) value = value.substring(0, 3);

        if (value.length > 0) {
            value = value.slice(0, -2) + "." + value.slice(-2);
        }
        
        setHeight(value);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrWeigth('');
        setErrHeight('');
    
        
        if (setImc != null) {
            let pesoNum = parseFloat(weigth);
            let alturaNum = parseFloat(height);
            
            const imc = pesoNum / (alturaNum * alturaNum);
            setImc(imc.toFixed(2));
            
            let classification = '';
            let color = '';
            if (imc >= 40.00) {
                classification = 'com obesidade grau III';
                color = styles.color_6;
            } else if (40.00 > imc && imc >= 35.00) {
                classification = 'com obesidade grau II';
                color = styles.color_5;
            } else if (35.00 > imc && imc >= 30.00 ) {
                classification = 'com obesidade grau I';
                color = styles.color_4;
            } else if (30.00 > imc && imc >= 25.0) {
                classification = 'acima do peso';
                color = styles.color_3;
            } else if (35 > imc && imc >= 18.5) {
                classification = 'com peso normal';
                color = styles.color_2;
            } else if (18.5 > imc) {
                classification = 'abaixo do peso';
                color = styles.color_1;
            }
            setClassification(classification);
            setColor(color);
        } 

        if (weigth > 600 || weigth < 10) {
            setErrWeigth("Peso inválido!");
            setImc(null);
        }
        if (height > 3.00 || height < 0.50) {
            setErrHeight("Altura inválida!");
            setImc(null);
        }
    }

    return (
        <div id='form' className="container">
            <div className={styles.content}>
                <h2 className={styles.title}>Calcule seu IMC</h2>
                <p className={styles.text}>(Índice de Massa Corporal)</p>
                <form onSubmit={handleSubmit}>
                    <div className={styles.value}>
                        <label className={styles.label} htmlFor='weigth'>Peso</label>
                        <input 
                            value={weigth} 
                            onChange={({target}) => setWeigth(target.value)} 
                            className={styles.input} 
                            id='weigth' 
                            type="text" 
                            maxLength={4}
                            placeholder="Ex.: 60.0kg" 
                            required
                            autoComplete='off'
                        />
                        {errWeigth && <p className={styles.err}>&#x26A0; {errWeigth} &#x26A0;</p>}
                    </div>
                    <div className={styles.value}>
                        <label className={styles.label} htmlFor='height'>Altura</label>
                        <input 
                            value={height} 
                            onChange={handleInput} 
                            className={styles.input} 
                            id='height' 
                            type="text"
                            maxLength={4}
                            placeholder="Ex.: 1.70m"
                            required
                            autoComplete='off'
                        />
                        {errHeight && <p className={styles.err}>&#x26A0; {errHeight} &#x26A0;</p>}
                    </div>
                    <button className={styles.button} type="submit">Calcular</button>
                </form>
            </div>
        </div>
    )
}

export default Form;