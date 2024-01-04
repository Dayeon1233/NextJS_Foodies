import React from "react";
import Link from "next/link";

export default function Community() {
  return (
    <>
      <h1 style={{ color: "white", textAlign: "center" }}>Community</h1>
      <h3>
        <Link href="/meals">meals</Link>
      </h3>
      <h3>
        <Link href="/meals/share">meal share</Link>
      </h3>
      <h3>
        <Link href="/community">community</Link>
      </h3>
      <h3>
        <Link href="/meals/3">meal id</Link>
      </h3>
    </>
  );
}
