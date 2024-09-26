import { Outlet } from "react-router-dom"

const Root = () => {
  return (
    <section className="container flex flex-col gap-4 mx-auto border rounded-lg shadow-sm max-w-[520px] bg-card text-card-foreground p-6">
      <Outlet />
    </section>
  )
}

export default Root