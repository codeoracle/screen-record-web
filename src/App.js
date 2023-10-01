import Home from './page/Home/Home';
import SingleVideo from './page/singleVideo/SingleVideo'
import Register from './page/Register/Register';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Videos from './page/Videos/Videos';
import View from './page/View/View';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/video' element={<SingleVideo/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/videos' element={<Videos/>}/>
        <Route path='/view' element={<View/>}/>
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
