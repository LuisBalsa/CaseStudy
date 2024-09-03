import { FcGoogle } from "react-icons/fc";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";

export default function Login() {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);

  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      route.push("/profile");
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    if (user && !loading)
      route.push("/profile");
  }, [user]);

  return (
    <div className="shadow-xl mt-32 p-10 text-gray-700 rounded-lg">
      <button
        onClick={GoogleLogin}
        className="flex items-center justify-center gap-2 p-3 w-full font-medium text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-100 transition-all"
      >
        <FcGoogle className="text-2xl" />
        <span>Sign in with Google</span>
      </button>
    </div>
  );
}
