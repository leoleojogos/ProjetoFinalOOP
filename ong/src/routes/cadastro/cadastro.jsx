import './cadastro.css';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function Cadastro() {
  const [nome, setNome] = useState("")
  const [senha, setSenha] = useState("")
  const [erro, setErro ] = useState((<p></p>));

  const navigate = useNavigate();

  async function getUsuario(){
    const response = await axios.get("http://127.0.0.1:8000/app/usuario/")
    console.log(response.data);
  }

  async function addUsuario(){
      avaliarErro();

      const sendObj = {
          reqType: 'Register',
          nome: nome,
          senha: senha,
      };

      try {
          await axios.post("http://127.0.0.1:8000/app/usuario/", sendObj);
      }
      catch(e) {
          if (e.response.status === 401) {
              avaliarErro(e.response.data.error);
          }
          return;
      }

      setNome("");
      setSenha("");
  }

  function avaliarErro(msgText = "") {
      if (msgText === "") {
          setErro((
            <p></p>
          ));
      }
      else {
          setErro((
            <p className='ERRO' onClick={deletar}>
              { msgText }
            </p>
          ));
      }
  }

  function deletar() {
      setErro((
        <p></p>
      ));
  }

  return (
    <div className='floatDiv'>
      <p>Nome:</p>
      <input type="text" value={nome} placeholder="Nome"  name="nome" id="nome" onChange={e => setNome(e.target.value)} />

      <p>Senha:</p>
      <input type="text" value={senha} placeholder="Senha"  name="senha" id="senha" onChange={e => setSenha(e.target.value)} />

      

      { erro }

      <button onClick={addUsuario}>Cadastrar</button>
      <svg onClick={() => navigate('/home')} className='exit' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g transform="translate(16 0) scale(-1 1)"><path d="M12 10V8H7V6h5V4l3 3zm-1-1v4H6v3l-6-3V0h11v5h-1V1H2l4 2v9h4V9z"/></g></svg>

    </div>
  )
}

export default Cadastro
