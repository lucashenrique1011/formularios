import "./exercicios/useStade"
import './App.css'
import UseStade from "./exercicios/useStade"
import HookForm from "./exercicios/hookForm"
import Formik from "./exercicios/formik"

function App() {
  return (
    <div className='corpo'>
      <div className='exercicio'>
        <h1 >useStade</h1>
        <UseStade/>
      </div>
      <div className='exercicio'>
        <h1 >reactHookForm</h1>
        <HookForm/>
      </div>
      <div className='exercicio'>
        <h1 >Formik</h1>
        <Formik/>
      </div>
    </div>
  )
}

export default App
