import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import Login from "./features/auth/pages/login";
import Register from "./features/auth/pages/register";

import Todos from "./features/todos";
import Completed from "./features/todos/pages/completed";
import Edit from "./features/todos/pages/edit";
import Important from "./features/todos/pages/important";
import Today from "./features/todos/pages/today";
import "./App.scss"
import { isLogginSelector } from "./redux/selectors";
function App() {

  const navigate = useNavigate();
  const isLoggin = useSelector(isLogginSelector);

   useEffect(() => {
    if(isLoggin){
      navigate("/todos")
    }else {
      navigate("/")
    }
   }, [isLoggin])
   

  return (

  <Routes>
    <Route path="/" element={<Login />} />
    <Route path='signup' element={<Register />} />
    <Route path="todos" element={<Todos />}>
      <Route index element={<Today />} />
      <Route path='today' element={<Today />} />
      <Route path='important' element={<Important />} />
      <Route path='completed' element={<Completed />} /> 
      <Route path="Id">
        <Route  index element={<Edit />} />
        <Route  path=":Id" element={<Edit />} />
      </Route>
    </Route>
  </Routes>
  );
}

export default App;
