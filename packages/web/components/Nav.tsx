import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Nav() {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center p-6 bg-gray-100 shadow-md">
      <div className="flex items-center gap-2 text-lg font-medium text-gray-700">
        <FaHome className="text-xl" />
        <Link href="/">Home</Link>
      </div>
      <ul className="flex items-center gap-4 mt-4 md:mt-0">
        <Link href="/login">
          <div className="flex items-center gap-2 bg-blue-200 px-4 py-2 rounded-md hover:bg-blue-300 transition-all">
            <FcGoogle className="text-2xl" />
            Login
          </div>
        </Link>
      </ul>
    </nav>
  );
}
