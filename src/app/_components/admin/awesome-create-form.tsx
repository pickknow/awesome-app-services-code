"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { api } from "@/trpc/react";
// import { redirect } from 'next/navigation';

export default function CreateAwesome() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");
  const [summary, setSummary] = useState("");
  const [tags, setTags] = useState("Android");
  const [content, setContent] = useState("");

  const createAwesome = api.awesome.create.useMutation({
    onSuccess: () => {
      router.push('/admin')
    }
  })
  const errors = createAwesome.error?.data?.zodError?.fieldErrors

  return (
    <div className=" max-w-4xl mx-auto mt-10">
      {errors && Object.entries(errors).map(([k, v]) => {
        return <pre>{k}:{v}</pre>
      })}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createAwesome.mutate({ title, cover, summary, tags, content });
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
        onChange={(e)=> setTags(e.target.value)}>
          <option value="android" selected>Android</option>
          <option value="ios">Ios</option>
        </select>
        <textarea placeholder="Summary"
          className="textarea textarea-bordered textarea-lg w-full"
          onChange={e => setSummary(e.target.value)}
        >
        </textarea>
        <textarea placeholder="say samething to introduce this app"
          className="textarea textarea-bordered textarea-lg w-full min-h-96"
          onChange={e => setContent(e.target.value)}
        >
        </textarea>
        <button
          type="submit"
          className="btn btn-accent"
          disabled={createAwesome.isLoading}
        >
          {createAwesome.isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
