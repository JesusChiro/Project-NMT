import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import { App } from './App.jsx'
import './styles.css'
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
