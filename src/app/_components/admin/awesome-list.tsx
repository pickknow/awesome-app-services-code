"use client";
import { api } from "@/trpc/react";
import type { RouterOutputs } from "@/trpc/shared";
import { useRouter } from "next/navigation";
import Card from "@/app/_components/admin/awesome-card";

type CardItem = RouterOutputs["awesome"]["all"][0];

export default function AwesomeList() {
  const { data, isLoading } = api.awesome.all.useQuery();
  const router = useRouter();
  const onSuccess = () => router.refresh();
  if (isLoading) return <div>Loding</div>;
  return (
    <div className="md:p0 p-2 md:grid md:grid-cols-4 md:gap-4 lg:grid-cols-5">
      {data?.map((item: CardItem) => (
        <Card item={item} key={item.id} onSuccess={onSuccess} />
      ))}
    </div>
  );
}
