import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Content } from 'antd/es/layout/layout';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
// import { Register } from './pages/Register';

const Layout = () => {
  const isAuth = useSelector((state) => state.authSlice.isAuthenticated);
  const user = useSelector((state) => state.authSlice.user?.user);
  return (
    <>
      <NavBar isAuth={isAuth} user={user} />
      <Content>
        <Outlet />
      </Content>
    </>
  );
};
const route = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    // errorElement: <RouterError />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        lazy: async () => {
          let { Login } = await import('./pages/Login');
          return { Component: Login };
        },
      },
      {
        path: 'register',
        lazy: async () => {
          let { Register } = await import('./pages/Register');
          return { Component: Register };
        },
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
function App() {
  return <RouterProvider router={route} />;
}

export default App;
