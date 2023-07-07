"use client";
import React from "react";
import { signIn } from "next-auth/react";

type Props = {};

const SignIn = (props: Props) => {
  const handleLoginWithGoogle = () => signIn("credentials");

  return (
    <div>
      <p className="text-red">Signed in</p>
      <button onClick={handleLoginWithGoogle}>Sign in</button>
    </div>
  );
};

export default SignIn;
