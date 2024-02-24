import { api, } from "@/trpc/server";
import Link from "next/link";

import AwesomeList from "@/app/_components/awesome/awesome-list";


export default async function HomeCate({ params }: { params: { id: string } }) {

  const tags = params.id;
  const awesomes = await api.awesome.findByTag.query({ tags });

  return (
    <AwesomeList awesomes={awesomes} />
  );
}


