import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <div className="mb-6">
          <h1>crimsonstroke.xyz</h1>
        </div>
        <div>
          <Link href={`/noticias/testing`}>ir a testing</Link>
        </div>
      </div>
    </>
  );
}
