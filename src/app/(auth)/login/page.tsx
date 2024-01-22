import Link from "next/link";
import React from "react";

export default function LoginPage() {
  return (
    <div>
      <div>Login Page</div>
      <div>
        new user? try <Link href={"./registration"}>registering</Link>
      </div>
    </div>
  );
}
