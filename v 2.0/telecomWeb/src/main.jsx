import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import { App } from './App.jsx'
import './styles.css'
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './context/AuthContext.jsx'

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider >,
  document.getElementById('root')
)
