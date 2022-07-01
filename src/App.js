import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import ToDos from './components/ToDos/ToDos'
import CompleteTask from './components/CompleteTask/CompleteTask'
import Calender from './components/Calender/Calender'
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/todo" element={<ToDos></ToDos>}></Route>
          <Route path="/completetask" element={<CompleteTask></CompleteTask>}></Route>
          <Route path="/calender" element={<Calender></Calender>}></Route>
        </Routes>
        <Footer></Footer>
      </Navbar>
    </div>
  );
}

export default App;
