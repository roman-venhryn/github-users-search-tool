import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from '@/pages/Root';
import SearchPage from '@/pages/SearchPage';
import Error from '@/components/Error';
import ProfilePage from '@/pages/ProfilePage';

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
        element: <ProfilePage />,
      }
    ]
  }
])

function App() {
  return (
    <div className='flex min-h-screen p-4 place-items-center'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
