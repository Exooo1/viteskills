export const Async = () => {
    return <section>
        <h1>Async is here!</h1>
    </section>
}

const getPosts = (i) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${i}`).then(res=>res.json())
}

const getFetch = async () => {
    const allPromise = []
    for (let i = 1; i < 100; i++) {
        allPromise.push(getPosts(String(i)))
    }
    const response = await Promise.all(allPromise)
    return response
}

getFetch().then(res=>console.log(res))
