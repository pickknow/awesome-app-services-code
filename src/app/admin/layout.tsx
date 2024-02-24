import "@/styles/globals.css";

import { TRPCReactProvider } from "@/trpc/react";
import AdminNav from "@/app/admin/admin-topnav";
import { getServerAuthSession } from "@/server/auth";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerAuthSession();
  const role = session?.user?.role;
  if (role !== "admin") return <div>UNAUTHORIZED</div>;

  return (
    <html lang="en">
      <body>
        <AdminNav />
        <div className="md:cotainer mx-auto max-w-screen-xl md:m-auto">
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </div>
      </body>
    </html>
  );
}
