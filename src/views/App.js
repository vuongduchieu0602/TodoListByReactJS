import './App.css';
import TodoList from './Todos/TodoList';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyComponent from './Example/MyComponent';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import ListUser from './Users/ListUser';
import DetailUser from './Users/DetailUser';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />

        <header className="App-header">  

        <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <TodoList />
            </Route>
            <Route path="/jobs">
              <MyComponent />
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>

            <Route path="/user/:id">
              <DetailUser />
            </Route>

          </Switch>
            
        </header>

        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
          <ToastContainer />

      </div>
    </BrowserRouter>
  );
}

export default App;
