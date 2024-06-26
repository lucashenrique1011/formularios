import { useFormik } from "formik"

function Formik() {

    const formik = useFormik({ initialValues: { name: "",email:"",tell:0 }, onSubmit: (value) => { 
        alert(`         nome: ${value.name}
        e-mail:${value.email}
        telefone${value.tell}`) 
    } })

    return (
        <div className="corpoU" >

            <form onSubmit={formik.handleSubmit}>
                <fieldset>
                    <label htmlFor="nome" >nome: </label>
                    <input type="text" name="name" id="nome" value={formik.values.name} onChange={formik.handleChange} />
                    <br /><br />
                    <label htmlFor="email">email: </label>
                    <input type="email" id="email" value={formik.values.email} onChange={formik.handleChange} />
                    <br /><br />
                    <label htmlFor="tell">telefone: </label>
                    <input type="number" id="tell" value={formik.values.tell} onChange={formik.handleChange} />
                    <br /><br />
                    <button type='submit'>enviar</button>
                </fieldset>
            </form>


        </div>
    )

}

export default Formik