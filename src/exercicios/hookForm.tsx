import { useForm, SubmitHandler } from 'react-hook-form'
import './useStade.css'


type Inputs = {
    nome: string
    email: string
    tell: number
}

function HookForm() {

    const { handleSubmit, register } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (e) => {
        alert(`        nome: ${e.nome}
        e-mail: ${e.email}
        telefoner: ${e.tell}`)
          
    }

    return (
        <div className="corpoU">

            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="nome" >nome: </label>
                <input type="text" id="nome" {...register('nome')} />
                <br /><br />
                <label htmlFor="email">email: </label>
                <input type="email" id="email" {...register('email')} />
                <br /><br />
                <label htmlFor="tell">telefone: </label>
                <input type="number" id="tell" {...register('tell')} />
                <br /><br />
                <button type='submit'>enviar</button>
            </form>


        </div>
    )
}

export default HookForm