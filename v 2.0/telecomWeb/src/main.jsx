import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import { App } from './App.jsx'
import './styles.css'
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
)
