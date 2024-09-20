"use client"
import React from "react";
import { useFetchPostQuery } from "../services/fetchquerry";
import Link from "next/link";


const page = () => {

      const { data: todos, error, isLoading } = useFetchPostQuery();

  if (isLoading) return <h1 className="text-center mt-[10%]">Loading...</h1>;
  if (error) return <p>Error loading todos</p>;
  return (
    <div className="App">
           {todos && todos.length > 0 ? (
           <div>
           {todos.map((todo) => (
             <div key={todo.id} className="bg-gray-400 mt-4 p-6 w-[90%] mx-auto">
              <Link href={`/start/${todo.id}`}>
              
              <h1>  {todo.title} </h1>
              <p>  {todo.body} </p> </Link>
            
             </div>
           ))}
         </div>
          ) : (
         <p>No todos found.</p>
       )}
     </div>
  )
}

export default page
