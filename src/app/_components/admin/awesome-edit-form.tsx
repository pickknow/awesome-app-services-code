"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { api } from "@/trpc/react";
import { RouterOutputs } from "@/trpc/shared";

type Awesome = RouterOutputs["awesome"]["show"];

export default function AwesomeEditForm({ awesome }: { awesome: Awesome }) {

  if (!awesome) return( <div>404</div>);
  const router = useRouter();
  const [title, setTitle] = useState(awesome.title);
  const [cover, setCover] = useState(awesome.cover);
  const [summary, setSummary] = useState(awesome.summary);
  const [tags, setTags] = useState(awesome.tags);
  const [content, setContent] = useState(awesome.content);

  const editAwesome = api.awesome.edit.useMutation({
    onSuccess: () => {
      router.refresh();
    }
  })
  const errors = editAwesome.error?.data?.zodError?.fieldErrors

  return (
    <div className=" max-w-4xl mx-auto mt-10">
      {errors && Object.entries(errors).map(([k, v]) => {
        return <pre>{k}:{v}</pre>
      })}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          editAwesome.mutate({id:awesome.id, title, cover, summary, tags, content });
        }}
        className="flex flex-col gap-2"
      >
        <input className="input input-bordered w-full"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input className="input input-bordered w-full"
          type="text"
          placeholder="cover"
          value={cover}
          onChange={(e) => setCover(e.target.value)}
        />
        <select className="select select-bordered w-full max-w-xs"
          onChange={(e) => setTags(e.target.value)}>
          <option value="android" selected={tags=='android'}>Android</option>
          <option value="ios" selected={tags=='ios'}>Ios</option>
        </select>
        <textarea placeholder="Summary"
          className="textarea textarea-bordered textarea-lg w-full"
          onChange={e => setSummary(e.target.value)}
        >{summary}
        </textarea>
        <textarea placeholder="say samething to introduce this app"
          className="textarea textarea-bordered textarea-lg w-full min-h-96"
          onChange={e => setContent(e.target.value)}
        >{content}
        </textarea>
        <button
          type="submit"
          className="btn btn-accent"
          disabled={editAwesome.isLoading}
        >
          {editAwesome.isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
