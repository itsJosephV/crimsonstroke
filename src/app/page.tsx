import { getHome } from "@/lib/home";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const data = await getHome();

  console.log(data);

  return (
    <div className="p-10">
      <div className="mb-5">
        <h1 className="text-3xl">{data.hero_title}</h1>
        <p className="text-slate-400">{data.hero_subtitle}</p>
      </div>

      {data.hero_cover && (
        <Image
          width={200}
          height={200}
          src={`${process.env.DIRECTUS_API_ENDPOINT}/assets/${data.hero_cover}`}
          alt=""
        />
      )}

      {Array.isArray(data.hero_buttons) && (
        <ul>
          {data.hero_buttons.map((b) => (
            <li key={b.label}>
              <Link
                className="bg-violet-600 inline-block py-2 px-4 rounded-md font-medium hover:bg-green-700 transition-colors duration-300"
                href={b.link}
              >
                {b.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <div className="bg-slate-900 p-5 rounded-md mt-10">
        <p>Posts</p>
      </div>
    </div>
  );
}
