import './App.css';
import TodoList from './Todos/TodoList';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyComponent from './Example/MyComponent';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import ListUser from './Users/ListUser';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />

        <header className="App-header">  

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<TodoList />} />
            <Route path="/example" element={<MyComponent />} />
            <Route path="/user" element={<ListUser />} />
          </Routes>
            
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
