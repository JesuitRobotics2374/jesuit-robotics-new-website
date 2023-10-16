"use client";

import { useRouter } from "next/navigation";
// Google
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../libraries/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Image from "next/image";
import { useEffect } from "react";

export default function SignUp() {
  const [user, loading] = useAuthState(auth);

  // Router
  const router = useRouter();

  // Sign In with Google
  const googleProvider = new GoogleAuthProvider();

  function googleLogin() {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        router.replace("/sign-in/welcome");
      })
      .catch((error) => {
        const errorMessage = error.message;

        console.log(errorMessage);
      });
  }

  useEffect(() => {
    if (!loading && user) {
      router.replace("/member");
    } else {
      console.log("Sign In");
    }
  });

  return (
    <div>
      <h1 className=" pb-4">Sign In</h1>

      <div className="mx-auto flex max-w-4xl items-center justify-center">
        <div className="mx-auto my-5 flex max-w-3xl flex-col items-start justify-center gap-10">
          <h4 className="max-w-sm text-center">
            A Jesuit Student or Mentor? Sign in to access the docs, schedule and
            more!
          </h4>
          <button
            className="button-outline large-button mx-auto flex h-fit items-center justify-center gap-4 p-4 px-10"
            onClick={googleLogin}
          >
            <FcGoogle className="text-2xl" />
            Sign in with Google
          </button>
        </div>
        <Image
          src="/svg/sign-in/sign-in-animated.svg"
          alt=""
          className="w-1/2 max-w-xl"
          width={400}
          height={400}
          draggable="false"
          priority
        />
      </div>
    </div>
  );
}
