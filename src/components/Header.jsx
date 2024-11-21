import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="text-white p-5 w-full bg-slate-600">
      <nav className="flex justify-center gap-10 text-2xl">
        <Link className="hover:text-red-300 transition duration-150" to="/">
          Home
        </Link>
        {/* <Link
          className="hover:text-red-300 transition duration-150"
          to="/profile"
        >
          Profile
        </Link> */}
        <Link
          className="hover:text-red-300 transition duration-150"
          to="/newuser"
        >
          New User
        </Link>
      </nav>
    </header>
  );
}
