import { api } from "@/trpc/server";
// import type { RouterOutputs } from "@/trpc/shared";
import Markdown from "react-markdown";

export default async function HomeCate({
  params,
}: {
  params: { show: string };
}) {
  const url = params.show;
  // type Article = RouterOutputs["awesome"]["show"];
  const article = await api.awesome.show.query({ url });

  return (
    <div className="mb-10 mt-3 p-4">
      {/* <div> <img src={article?.cover} alt={article?.title} /> </div> */}
      <div className="text-center mt-10 text-xl">{article?.title}</div>
      <div className="mt-2 italic text-slate-400">{article?.summary}</div>
      <div className="mt-8">
        <Markdown>{article?.content}</Markdown>
      </div>
    </div>
  );
}
