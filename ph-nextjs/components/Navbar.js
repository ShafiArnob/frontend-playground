import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div>
      Navbar
      {session?.user ? (
        <button onClick={() => signOut()}>Logout</button>
      ) : (
        <button>Login</button>
      )}
      {session?.user && <p>{session?.user?.name}</p>}
    </div>
  );
};

export default Navbar;
