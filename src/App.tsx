import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root/Root';
import SearchPage from './pages/SearchPage/SearchPage';
import UserInfoPage from './pages/UserInfoPage/UserInfoPage';
import { loader as userLoader } from './pages/UserInfoPage/loader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true, element: <SearchPage />
      },
      {
        path: '/:user',
        id: 'user-details',
        element: <UserInfoPage />,
        loader: userLoader
      }
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
