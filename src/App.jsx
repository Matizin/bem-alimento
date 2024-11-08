
import { Outlet } from "react-router-dom"
import Login from "./routes/Login/Login"
function App() {

  return (
    <>
      <Login/>
      <Outlet/>
    </>
  )
}

export default App
