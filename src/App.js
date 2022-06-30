import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import ToDo from './components/ToDo/ToDo'
import CompleteTask from './components/CompleteTask/CompleteTask'
import Calender from './components/Calender/Calender'

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/todo" element={<ToDo></ToDo>}></Route>
          <Route path="/completetask" element={<CompleteTask></CompleteTask>}></Route>
          <Route path="/calender" element={<Calender></Calender>}></Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
