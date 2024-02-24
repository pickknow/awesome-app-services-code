"use client";
import { api } from "@/trpc/react";
import Link from "next/link";
import type { RouterOutputs } from "@/trpc/shared";

type CardItem = RouterOutputs["awesome"]["all"][0];

export default function Card({
  item,
  onSuccess,
}: {
  item: CardItem;
  onSuccess: () => void;
}) {
  const deleteAwesome = api.awesome.delete.useMutation({
    onSuccess: () => onSuccess(),
  });
  const onDelete = () => {
    deleteAwesome.mutate({ id: item.id });
  };
  const pic_src = item.cover || undefined;
  return (
    <div className="card w-100 bg-base-100 mb-5 overflow-hidden shadow-xl md:mb-0">
      <Link href={`/${item.url}`}>
        <figure>
          <img src={pic_src} alt="Shoes" className="w-full md:h-32" />
        </figure>
      </Link>
      <div className="card-body px-auto p-3">
        <h2 className="card-title">{item.title}</h2>
        <div className="card-actions justify-end">
          <Link
            href={`/admin/awesome/${item.id}/edit`}
            className="btn btn-warning"
          > Edit </Link>
          <button
            className="btn btn-error"
            disabled={deleteAwesome.isLoading}
            onClick={() => onDelete()} >
            {deleteAwesome.isLoading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}
