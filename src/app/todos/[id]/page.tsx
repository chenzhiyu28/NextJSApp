import { Todo } from "@/app/page"
import { notFound } from "next/navigation";

function getTodo(id: string):Promise<Todo> {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => res.json())
}


export default async function TodoPages(
    {params}: {params: {id: string}}
) {
    const todo = await getTodo(params.id)
    if (todo.title == null) return notFound();
    return <h1>{params.id} - {todo.title}</h1>
}