import {
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom'
import './App.css'
import Login from './pages/Login/Login'
import RestorePassword from './pages/RestorePassword/RestorePassword';
import UIKit from './pages/UIKit/UIKit.jsx'
import SetPassword from './pages/SetPassword/SetPassword';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/uikit",
    element: <UIKit/>,
  },
  {
    path: "/restore",
    element: <RestorePassword />,
  },
  {
    path: "/password",
    element: <SetPassword />,
  },
]);

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
