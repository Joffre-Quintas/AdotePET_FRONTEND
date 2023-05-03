import Header from './components/Header/Header';
import Home from './pages/HOME/Home';
import RegisterPET from './pages/RegisterPET/RegisterPET';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
          <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register-pet' element={<RegisterPET/>}/>  
      </Routes>
    </Router>
  )
}

export default App;
