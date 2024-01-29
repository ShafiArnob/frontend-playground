import { signIn } from "next-auth/react";
import React from "react";

const login = () => {
  return (
    <div>
      <button
        onClick={() =>
          signIn("github", { callbackUrl: "http://localhost:3000/" })
        }
      >
        Github Login
      </button>
    </div>
  );
};

export default login;
