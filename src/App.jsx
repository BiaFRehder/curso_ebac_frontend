import { use, useState } from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import Result from "./components/Result";
import Table from "./components/Table";
import Footer from "./components/Footer";

function App() {
    const [imc, setImc] = useState('');
    const [classification, setClassification] = useState('');
    const [color, setColor] = useState('');

    return (
        <>
            <Header />
            <Form setImc={setImc} setClassification={setClassification} setColor={setColor} invalidHeight='Altura inválida'/>
            {imc != null ? (
                <Result imc={imc} classification={classification} color={color} setColor={setColor} />
            ) : (
                <p className="err">Não foi possível calcular o IMC</p>
            )}
            <Table />
            <Footer />
        </>
    )
}

export default App
