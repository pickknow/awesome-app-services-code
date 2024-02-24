
import { api } from "@/trpc/server";

export default async function AboutPage () {
  
  const jason = await api.hello.jason.query({text:'Howare you?'});
  const users = await api.user.allUsers.query();

  return (
    <div>
      {jason ? jason.message : "Loading tRPC query..."}
      {users && users.map( (u)=> <div>{u.name}</div>)}
    </div>
  )
}
