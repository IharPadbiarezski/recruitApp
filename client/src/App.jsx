import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login'
import Sidebar from './components/Sidebar/Sidebar';
import RestorePassword from './pages/RestorePassword/RestorePassword';
import SetPassword from './pages/SetPassword/SetPassword';
import UIKit from './pages/UIKit/UIKit'
import Users from './pages/Users/Users';
import Tasks from './pages/Tasks/Tasks';
import Profile from './pages/Profile/Profile'
import Vacancies from './pages/Vacancies/Vacancies';
import Workspace from './pages/Workspace/Workspace';

const Layout = () => {
  return (
    <div className='layout'>
      <Sidebar />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/workspace",
        element: <Workspace />,
      },
      {
        path: "/vacancies",
        element: <Vacancies />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/tasks",
        element: <Tasks />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/uikit",
    element: <UIKit />,
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
