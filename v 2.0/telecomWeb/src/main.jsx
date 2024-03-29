import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import { App } from './App.jsx'
import './styles.css'
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './context/AuthContext.jsx'
import { TaskProvider } from "./context/TasksContext.jsx";
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.render(
  <AuthProvider>
    <TaskProvider>
      <BrowserRouter>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </BrowserRouter>
    </TaskProvider>
  </AuthProvider >,
  document.getElementById('root')
)
