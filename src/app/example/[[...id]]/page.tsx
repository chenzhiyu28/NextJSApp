export default function Page({params} : {
    params: {
        id?: string[]
    }
}) {
    // return <h1>Hi</h1>
    return <h1>{params.id?.join(", ")}</h1>
}