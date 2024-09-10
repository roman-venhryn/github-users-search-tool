import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { isRouteErrorResponse, useRouteError } from "react-router-dom"

const ErrorPage = () => {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Unknown error';
  }

  return (
    <div className="container mx-auto border rounded-lg shadow-sm max-w-[520px] bg-card text-card-foreground p-6 flex flex-col gap-4 place-items-center">
      <h5>Something went wrong!</h5>
      <p>{errorMessage}</p>
      <Button>
        <Link to="/">Go to home page</Link>
      </Button>
    </div>
  )
}

export default ErrorPage