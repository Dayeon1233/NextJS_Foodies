import React from "react";
import Link from "next/link";

export default function Meals() {
  return (
    <>
      <h1 style={{ color: "white", textAlign: "center" }}>Meals</h1>
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
