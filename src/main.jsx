import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import{createBrowserRouter, RouterProvider} from "react-router-dom"
import Fornecedores from './routes/Fornecedores/Fornecedores'
import Login from './routes/Login/Login'
import MenuPrincipal from './routes/MenuPrincipal/MenuPrincipal'
import PlanoNutricional from './routes/PlanoNutricional/PlanoNutricional'
import EducacaoNutricional from './routes/EducacaoNutricional/EducacaoNutricional'
import Imc from './routes/IMC/Imc'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Login/>
  },
  {
    path:"/Fornecedores",
    element:<Fornecedores/>
  },
  {
    path:"/MenuPrincipal",
    element:<MenuPrincipal/>
  },
  {
    path:"/PlanoNutricional",
    element:<PlanoNutricional/>
  },
  {
    path:"/EducacaoNutricional",
    element:<EducacaoNutricional/>
  },
  {
    path:"/IMC",
    element:<Imc/>
  },

])
  
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
