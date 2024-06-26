import { useState } from "react"
import './useStade.css'

function UseStade() {

    const [dados, setdados] = useState<any>({
        nome: String,
        email: String,
        telefone: Number
    })

    function mostrar() {

        {
            (dados != undefined) && (
                alert(`    nome: ${dados.nome}
    e-mail: ${dados.email}
    telefoner: ${dados.telefone}`)
            )
        }



    }

    return (
        <div className="corpoU">
            <form action="">
                <label htmlFor="nome" >nome: </label>
                <input type="text" id="nome" onChange={(e) => setdados((prev: any) => ({ ...prev, nome: e.target.value }))} />
                <br /><br />
                <label htmlFor="email">email: </label>
                <input type="email" id="email" onChange={(e) => setdados((prev: any) => ({ ...prev, email: e.target.value }))} />
                <br /><br />
                <label htmlFor="tell">telefone: </label>
                <input type="number" id="tell" onChange={(e) => setdados((prev: any) => ({ ...prev, telefone: e.target.value }))} />
                <br /><br />
                <button onClick={mostrar}>enviar</button>
            </form>


        </div>
    )
}

export default UseStade