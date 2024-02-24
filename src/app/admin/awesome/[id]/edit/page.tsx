import AwesomeEditForm from "@/app/_components/admin/awesome-edit-form";
import { api, } from "@/trpc/server";


export default async function AwesomeEdit({ params }: { params: { id: string } }) {
  const id = params.id;
  const awesome = await api.awesome.findById.query({ id });

  if (!awesome) return(<div>404</div>)
  return (
    <AwesomeEditForm awesome={awesome} />
  );
}


