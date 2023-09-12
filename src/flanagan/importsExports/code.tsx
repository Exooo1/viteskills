export const math = (() => {
    const sayHello = (name: string) => {
        return `Hello ${name}`
    }
    const sayBye = (name: string) => {
        return `Goodbye ${name}`
    }
    return {sayHello, sayBye}
})()


export const user = (() => {
    const modules = {}
    return modules
})()


