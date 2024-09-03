import { auth } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";

export default function Dashboard() {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);

  if (loading) return <h1>Loading...</h1>;
  else if (!user) route.push("/login");
  else {
    return (
      <div className="shadow-xl mt-32 p-10 text-gray-700 rounded-lg flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">
          Welcome to your profile, {user.displayName}
        </h1>
        {user.photoURL && (
          <img
            src={user.photoURL}
            alt="User Photo"
            className="rounded-full w-24 h-24 mb-4"
          />
        )}
        <button
          onClick={() => auth.signOut()}
          className="flex items-center justify-center gap-2 p-3 w-full font-medium text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-100 transition-all"
        >
          <FcGoogle className="text-2xl" />
          <span>Sign out</span>
        </button>
      </div>
    );
  }

  return null;
}
