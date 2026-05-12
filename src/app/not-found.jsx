import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 text-center px-6">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>

        <h2 className="mt-4 text-2xl font-semibold text-gray-700">
          Page Not Found
        </h2>

        <p className="mt-2 text-gray-500 max-w-md">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-xl bg-black px-6 py-3 text-white hover:bg-gray-800 transition"
        >
          Go Home
        </Link>
      </div>    
    </div>
  );
};

export default NotFound;
