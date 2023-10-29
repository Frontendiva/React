import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import Home from "./Pages/Home";
import Photos from "./Pages/Photos";
import UsersPage from "./Pages/UsersPage";
import {Provider} from 'react-redux';
import store from './store';
import {SinglePost} from './Pages/SinglePost';
import {SingleUser} from './Pages/singleUser';
import {SinglePhoto} from './Pages/singlePhoto';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='/:id' element={<SinglePost/>}/>
        </Route>
        <Route path='/photos' element={<Photos />}>
          <Route path='/photos/:id' element={<SinglePhoto/>}/>
        </Route>
        <Route path='/users' element={<UsersPage/>}>
          <Route path='/users/:id' element={<SingleUser/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

function App() {
  return (
    <Provider store={store}>
      <Header />
      <AppRoutes />
    </Provider>
  );
}


export default App;
