import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export const Navbar = () => {
  const { data: sessionData } = useSession();

  const AuthButton = () => {
    return (
      <button
        className="btn btn-ghost"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    );
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" href="/">
          My Dashboard {sessionData ? `| ${sessionData?.user?.name}` : ""}
        </Link>
      </div>
      <div className="flex-none">
        {!sessionData ? (
          <AuthButton />
        ) : (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="User Avatar" src={sessionData?.user.image} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <button className="btn btn-ghost">Settings</button>
              </li>
              <li>
                <AuthButton />
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
