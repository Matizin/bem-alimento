
import { Outlet } from "react-router-dom"
import Login from "./routes/Login/Login"
import Header from '../../components/header'
import EducacaoNutricional from "./routes/EducacaoNutricional/EducacaoNutricional"
import Fornecedores from "./routes/Fornecedores/Fornecedores"
import Imc from "./routes/IMC/Imc"
import Login from "./routes/Login/Login"
import MenuPrincipal from "./routes/MenuPrincipal/MenuPrincipal"
import PlanoNutricional from "./routes/PlanoNutricional/PlanoNutricional"


function App() {

  return (
    <>
      <Login/>
      <EducacaoNutricional/>
      <Fornecedores/>
      <Imc/>
      <MenuPrincipal/>
      <PlanoNutricional/>
      
      <Outlet/>
      
    </>
  )
}

export default App
