import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root/Root';
import SearchPage from './pages/SearchPage/SearchPage';
import UserInfoPage from './pages/UserInfoPage/UserInfoPage';
import { loader as userLoader } from './pages/UserInfoPage/loader';
import Error from './components/Error/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <SearchPage />
      },
      {
        path: '/:username',
        id: 'user-details',
        element: <UserInfoPage />,
        loader: userLoader
      }
    ]
  }
])

function App() {
  return (
    <div className='flex h-screen p-4 place-items-center'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
