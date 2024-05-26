import logo from './logo.svg';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';
import Users from './Users';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import item from './items';
import stocks from './stocks';
import Editstock from './Editstock';

function App() { //Component
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/items" element={<item />} />

        <Route path="/stocks/:id/editstock" element={<Editstock />} />
        <Route path="/stocks" element={<stocks />} />

        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;
