import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Unknown'
}

export default function NotFound() {
  return (
    <div className="p-5">
      <div className="flex flex-col items-center bg-white justify-center h-[calc(100vh-90px)] border border-[#ebebeb] rounded-[24px] text-gray-900">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-xl mt-4">Oops! Page not found.</p>
        <p className="text-gray-500 mt-2">The page you are looking for doesn’t exist or has been moved.</p>
        <Link href="/" className="mt-6 px-6 py-2 text-black hover:text-black bg-secondary-pinkLight rounded-lg transition">
          Go Home
        </Link>
      </div>
    </div>
  );
}