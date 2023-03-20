import { Catalog } from "./components/Catalog/Catalog";
import { CreateGame } from "./components/CreateGame/CreateGame";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Routes, Route } from 'react-router-dom';



function App() {
  return (

    <div id="box">

      <Header />
      <main id="main-content">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/create-game' element={<CreateGame />}></Route>
          <Route path='/catalog' element={<Catalog />}></Route>
        </Routes>
      </main>



    </div >

  );
}

export default App;
