"use client"

export default function Error({ error, reset }: any) {
    return (<>
        <h1>{error.message}</h1>
        <button onClick={reset}>Retry</button>
    </>)
}

function wait(duration: number) {
    return new Promise (resolve => setTimeout(resolve,duration));
}