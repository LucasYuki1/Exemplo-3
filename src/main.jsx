import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Aluno from './routes/Aluno.jsx'
import Home from './routes/Home.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

{/* Criando a função createBrowserRouter */}

const router = createBrowserRouter([
  {
    // Chamando os elementos Pai
    path:'/', element: <App/>,
    errorElement:<Error/>,

    // Chamando os elementos filhos
    children:[
      // Criando a rota home
      {path:'/', element:<Home/>},
      // Criando a rota aluno
      {path:'/aluno', element:<Aluno/>}
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Criando o props que será renderizado */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
