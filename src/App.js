import logo from './logo.svg';
import './App.css';
import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import{ BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import Blog from "./Pages/Blog";
import { Provider } from 'react-redux';
import store from './store';
import { SinglePost } from './Pages/SinglePost';

function App() {
  return (
    <Provider store={store}>
        aaa
      <div>
        <Header />
        <Router>
                    <Routes>
                        <Route path='/' element={<Home/>}>
                          <Route path='/:id' element={<SinglePost/>}/>
                        </Route>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/contacts' element={<Contacts/>}/>
                        <Route path='/blog' element={<Blog/>}/>
                    </Routes>
                    </Router>

      </div>
      </Provider>
  );
}


export default App;
