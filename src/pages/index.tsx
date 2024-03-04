import Image from "next/image";
import { Inter } from "next/font/google";
import PostCard from "@/pages/components/post-card";
import {USERS} from "@/utils/users";
import Search from "@/pages/components/search";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <Search />
      {/*{USERS.map((user) =>(*/}
      {/*    <div key={user.firstName} >*/}
      {/*      <PostCard user={user} />*/}
      {/*    </div>*/}

      {/*    )*/}
      {/*  )*/}
      {/*}*/}
    </main>
  );
}
