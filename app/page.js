import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
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
    </main>
  );
}
