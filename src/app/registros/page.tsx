/**
 * Componente de página para mostrar registros de usuarios.
 */
"use client";

import { useEffect, useState } from "react";
import userAPI from "../api/userAPI";
import User from "../models/userModel";

export default function PageRegistros() {

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Hello World");
    userAPI.getUsers().then((users) => {
      console.log(users);
      setUsers(users);
      setLoading(false);
    });
  }, []);

  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <h1>Registros</h1>

      
      
      <div className="flex flex-col bg-gray-500 ">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 ">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        #
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Nombre
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Email
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                  {loading ? (
                    // Render skeleton rows
                    [...Array(5)].map((_, index) => (
                      <tr key={index}>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          <div className="animate-pulse bg-gray-200 h-4 w-4 rounded"></div>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="animate-pulse bg-gray-200 h-4 w-20 rounded"></div>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="animate-pulse bg-gray-200 h-4 w-20 rounded"></div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    // Render actual data
                    users.map((user,index) => (
                      <tr key={user.id}>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {index+1}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {user.nombre}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {user.correo}
                        </td>
                      </tr>
                    ))
                  )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    </main>
  )
}