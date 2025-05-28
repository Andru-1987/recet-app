import { BrowserRouter } from "react-router"
import "./App.css"
import Router from "./Router"
import NavBar from "../components/NavBar/NavBar"

const App = () => {
  return (
    <div>
      <BrowserRouter  basename="/recet-app/">
        <NavBar/>
        <Router />
      </BrowserRouter>
    </div>
  )
}

export default App
