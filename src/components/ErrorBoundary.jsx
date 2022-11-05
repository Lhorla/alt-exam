import { Helmet } from "react-helmet-async";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div
      role="alert"
    >
      <Helmet >
        <title>Something went wrong</title>
      </Helmet>
      <h1>Something went wrong:</h1>
      <p style={{ color: "red" }}>{error.message}</p>
      <button style={{ width: "fit-content" }} className="button" onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export default ErrorFallback;