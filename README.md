'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter()

  console.log(router);
  function handleNAvigate(){
    router.push('posts')
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={handleNAvigate}>Posts</button>
    </main>
  );
}
