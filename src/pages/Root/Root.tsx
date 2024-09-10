import { Outlet } from "react-router-dom"

const Root = () => {
  return (
    <div className='flex h-screen p-4 place-items-center'>
      <Outlet />
    </div>
  )
}

export default Root