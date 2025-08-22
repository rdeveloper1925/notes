"use client";
import { Logout } from "@/components/logout"
import { authClient } from "@/lib/auth-client";

function Dashboard() {
    
    const {data:session} = authClient.useSession();
    console.log(session?.session);
  return (
    <div>
      <h4>Hello its me {session?.user.name}</h4>
      <Logout/>
    </div>
  )
}

export default Dashboard
