import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/HomePage/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Contact from './Pages/Contact/Contact';
import AuthProvider from './context/AuthProvider';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound'
import Book from './Pages/Book/Book';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path='/book/:id'>
              <Book></Book>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
