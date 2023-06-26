import { useState } from "react";
import axios from "axios";
import "./login.css";

export default function Login() {
    const [ nome, setNome ] = useState("");
    const [ senha, setSenha ] = useState(0);
    
    async function checarLogin() {
        const response = await axios.post("http://127.0.0.1:8000/app/login/", {
            nome : nome,
            senha : senha,
        });
        console.log(response);
    }

    return(
        <div className="floatDiv">
            <p>Nome:</p>
            <input type="text" placeholder="Nome"  name="nome" id="nome" onChange={e => setNome(e.target.value)} />

            <p>Senha:</p>
            <input type="password" placeholder="Senha" name="senha" id="senha" onChange={e => setSenha(e.target.value)} />

            <button onClick={checarLogin}>Login</button>
        </div>
    );
}
