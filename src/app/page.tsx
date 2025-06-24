async function getTodos() {
  await wait(2000);
  return fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
}


export default async function Home() {
  const todos = await getTodos();
  return (<h1>{todos.length}</h1>)
}


function wait(duration: number) {
  return new Promise
  (resolve => setTimeout(resolve, duration))
}