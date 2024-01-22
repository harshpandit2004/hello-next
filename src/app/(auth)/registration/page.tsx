import React from "react";
import Link from "next/link";

export default function RegistrationPage() {
  return (
    <div>
      <div>Registration Page</div>
      <div>
        alredy registered? try <Link href={"./login"}>logging in</Link>
      </div>
    </div>
  );
}
