import './App.css';

import {Route, Routes} from 'react-router-dom';

import Cart from './components/Cart';
import Header from './components/Header';
import Main from './components/Main';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/users' element={<Users/>}/>
      </Routes>
      
    </div>
  );
}

export default App;