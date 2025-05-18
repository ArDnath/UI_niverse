import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './routes/HomePage.tsx'
import GetStarted from './routes/GetStarted/GetStarted.tsx'

const router = createBrowserRouter([{
  element:<App/>,
  children:[
    {
      path: '/',
      element:<HomePage />
    },
    {
      path:"/projects",
      element: <GetStarted/>
    },
    {
      path:"/projects/:projectId",
      element:<GetStarted/>
    },
    {
      path: '*',
      element: <div>404 Not Found</div> // or your custom 404 component
    }
  ]
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
