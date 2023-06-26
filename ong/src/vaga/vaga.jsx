import { useState } from "react";
import axios from "axios";
import "./login.css";

export default function Vaga() {
    const [ vaga,setVaga] = useState([]);
    
    async function VagaYes() {
        const response = await axios.get("http://127.0.0.1:8000/app/vaga/", {
        });
        console.log(response);
    }

    return(
        <div className="floatDiv">
            <div class="table-responsive">
      <table id="lista-database" >
            <thead>
               <tr>
                   <th>#ID</th>
                    <th>Descrição</th>
                    <th>Posição na Navegação</th>
                </tr>
              </thead>
              <tbody>   
                        <td>{{id}}</td>
                        <td>{{nome}}</td>
                        <td>{{categoria}}</td>
                        <td>{{tarefas}}</td>
                        <td>{{requisitos}}</td>
               </tbody>
      </table>
</div>
        </div>
    );
}
