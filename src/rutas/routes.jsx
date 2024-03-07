import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Inicio } from "../paginas/Inicio"
import { About } from "../paginas/about"
import { Login } from "../paginas/login"
import { Registro } from "../paginas/registro"
import { Error } from "../paginas/error"

export function Misrutas(){
    return(
        <Router>
            <Routes>
                <Route exact path ="/" element={<Inicio/>}></Route>
                <Route  path ="/about" element={<About/>}></Route>
                <Route  path ="/login" element={<Login/>}></Route>
                <Route  path ="/registro" element={<Registro/>}></Route>
                <Route  path ="*" element={<Error/>}></Route>
            </Routes>
        </Router>
    )
}