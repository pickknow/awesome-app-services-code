import Link from "next/link";

export default function AdminNav() {
  return (
    <div className="sticky top-0 z-50">
      <div className="md:cotainer md:m-auto max-w-screen-xl mx-auto">
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Link href="/admin" className="btn btn-ghost text-xl">Admin</Link>
          </div>
          <div className="flex-none">
            <Link href="/admin/awesome/create"
              className="btn">Create</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
