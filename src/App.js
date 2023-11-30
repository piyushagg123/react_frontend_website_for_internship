import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import Blog from './components/Blog/Blog';
import Profile from './components/Profile';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import Login from './components/Log';
import Sessions from './components/Navbar';
import Search from './components/Search';
import Session from './components/Sessions';
import Workshop from './components/Workshops';
import C_work from './components/C_work';
import About_page from './components/About_page';
function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
        <Route path='/' element={<Home/>}/>
        

        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/sessions' element={<Sessions/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/workshops' element={<Workshop/>}/>
        <Route path='/session' element={<Session/>}/>
        <Route path='/c-workshops' element={<C_work/>}/>
        <Route path='/about_page' element={<About_page/>}/>

      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
