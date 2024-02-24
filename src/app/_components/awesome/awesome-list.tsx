import { RouterOutputs } from "@/trpc/shared";
import Link from 'next/link';

type Awesomes = RouterOutputs["awesome"]["all"];
type CardItem = RouterOutputs["awesome"]["all"][0];

export default async function AwesomeList({ awesomes }: { awesomes: Awesomes }) {
  return (
    <div className="md:grid md:grid-cols-4 md:gap-4 lg:grid-cols-5 p-2 md:p0">
      {awesomes?.map((item: CardItem) => <Card item={item} key={item.id} />)}
    </div>
  )
}

async function Card({ item }: { item: CardItem }) {
  const pic_src = item.cover || undefined;
  return (
    <div>
      <Link className="card w-100 bg-base-100 shadow-xl overflow-hidden mb-5 md:mb-0"
      title={item.summary}
        href={`/${item.url}`}>
        <figure><img src={pic_src} alt="Shoes" className='md:h-32 w-full' /></figure>
        <div className="card-body md:h-52 p-3 px-auto">
          <h2 className="card-title">{item.title}</h2>
          <p className="pb-2 h-22 overflow-hidden">{item.summary}</p>
          <span className="card-actions justify-end text-xs italic text-slate-400">
            {item.tags.charAt(0).toUpperCase() + item.tags.slice(1)}
            </span>
        </div>
      </Link>
    </div>
  )
}
