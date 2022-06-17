
import './App.css';
import { Routes,Route} from "react-router-dom";
import Home from './components/Pages/Home/Home/Home';
import Header from './components/Shared/Header/Header';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
