"use client";
import { signIn, signOut, getProviders } from "next-auth/react";
import { GetServerSideProps } from "next";

// interface Props {
//   providers: Awaited<ReturnType<typeof getProviders>>;
// }

const Login = () => {
  const handleLoginWithGoogle = () => signIn("google");

  // console.log("providers?.google.name: ", providers?.google.name);
  // console.log(
  //   "process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID: ",
  //   process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
  // );
  return (
    <div>
      <p>Signed in</p>
      <button onClick={handleLoginWithGoogle}>Sign in</button>
    </div>
  );
};

export default Login;

// export const getServerSideProps: GetServerSideProps<Props> = async (
//   context
// ) => {
//   const providers = await getProviders();
//   return {
//     props: {
//       providers,
//     },
//   };
// };
