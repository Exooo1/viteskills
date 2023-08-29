const count = () => {
    console.count('name')
}
const user = {
    name: 'vlas',
    array: {
        city: 'misnk',
        arr: [1, 2, 3, 45]
    }
}
export const ConsoleLoggin = () => {
    console.group()
    console.log(console)
    console.warn('i!')
    console.group()
    console.info('this is info')
    console.error('failt')
    // console.debug([1,2,3,45,6])
    // console.assert(false, 'hello');
    // console.clear()
    console.log(user)
    console.dir(user)
    console.dir({name:'diana'})
    // console.time('name')
    // console.timeEnd('name')
    return <section>
        <h1>Console.log here!</h1>
        <button onClick={count}></button>
    </section>
}
