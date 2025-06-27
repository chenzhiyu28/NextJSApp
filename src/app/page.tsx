import Link from "next/link";
import { Suspense } from "react";

export const metadata = {
  title: "homePage",
  description: "Homepage of next.js app."
}

export interface Todo {
  id: number;
  title: string;
}

function wait(duration: number) {
  return new Promise
  (resolve => setTimeout(resolve, duration))
}

async function getTodos():Promise<Todo[]> {
  await wait(2000);
  return fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
}


export default async function Home() {
  const todos = await getTodos();
  return (
  <>
  <h1>Todos</h1>
  <ul>
    {todos.map(todo => (
      <li key= {todo.id}>
        <Link href={`todos/${todo.id}`}>{todo.title}</Link>
      </li>
    ))}
  </ul>
  </>
)
}


