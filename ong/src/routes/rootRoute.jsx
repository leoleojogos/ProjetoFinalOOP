
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import './rootRoute.css'

export default function RootRoute() {

    const [ dados, setDados ] = useState([]);
    const navigate = useNavigate();

    function renderizar() {
        const rend = async function() {
            const response = await axios.get("http://127.0.0.1:8000/app/login/");
            console.log("Response: ");
            console.log(response);

            setDados(response.data);
        }
        rend();
    }
    async function deletar(e) {
        const objId = e.target.parentElement.id;
        console.log(objId);
        const response = await axios.delete(`http://127.0.0.1:8000/app/login/${objId}/`);
        renderizar();
    }

    useEffect(renderizar, [ ]);

    return (
        <div id="homeDiv">
            {
                dados.map((obj, i) => (
                    <div className="user" key={i} id={obj.id}>
                        <div className="userData">
                            <h3>{ obj.username }</h3>
                            <h5>{ obj.email }</h5>
                        </div>
                        <svg onClick={e => deletar(e)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="deleteUser"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path> <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path> </svg>
                    </div>
                ))
            }
            <button style={{width: '50%'}} onClick={() => navigate('/cadastro')}>
                Cadastros
            </button>
        </div>
    );
}
