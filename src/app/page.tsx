import { Suspense } from "react";

async function getTodos() {
  await wait(2000);
  throw new Error("fake error");
  return fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
}


export default async function Home() {
  const todos = await getTodos();
  return (
  <>
  <h1>Todos</h1>
  <Suspense fallback={"loading"}>
    <h1>{todos.length}</h1> 
    {/* data fetching should stay inside the suspense */}
  </Suspense>
  </>
)
}


function wait(duration: number) {
  return new Promise
  (resolve => setTimeout(resolve, duration))
}