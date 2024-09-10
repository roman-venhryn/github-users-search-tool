import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col gap-2 place-items-center">
      <h5>Something went wrong!</h5>
      <Button>
        <Link to="/">Go to home page</Link>
      </Button>
    </div>
  )
}

export default Error