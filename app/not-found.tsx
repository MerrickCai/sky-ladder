import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col h-auto flex-grow items-center justify-center px-4">
      <h1 className="text-2xl">404 - Page Not Found</h1>
      <p className="mt-4">The page you are looking for does not exist.</p>
      <Link href="/" className="mt-4 text-blue-500">
        Go back to Home
      </Link>
    </div>
  );
}
