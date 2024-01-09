"use client";


export default function Home() {
 

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto">
        <h1>Login form</h1>

        <form className="flex flex-col">
            <input type="text" placeholder="Email" className="border border-gray-400 p-2 rounded-md mb-2" />
            <input type="password" placeholder="Password" className="border border-gray-400 p-2 rounded-md mb-2" />
        </form>


   

      </div>
    </main>
  );
}
