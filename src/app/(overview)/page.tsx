import { unstable_noStore as noStore } from "next/cache";

// import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";
import AwesomeList from "@/app/_components/awesome/awesome-list";

export default async function Home() {
  noStore();
  const awesomes = await api.awesome.all.query()
  return (
    <AwesomeList awesomes={awesomes} />
  );
}


