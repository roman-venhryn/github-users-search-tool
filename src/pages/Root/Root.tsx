import { Outlet } from "react-router-dom"

const Root = () => {
  return (
    <div className="container mx-auto border rounded-lg shadow-sm max-w-[520px] bg-card text-card-foreground p-6">
      <Outlet />
    </div>
  )
}

export default Root