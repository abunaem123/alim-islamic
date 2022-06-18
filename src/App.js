
import './App.css';
import { Routes,Route} from "react-router-dom";
import Home from './components/Pages/Home/Home/Home';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
