const math = (() => {
    const sayHello = (name: string) => {
        return `Hello ${name}`
    }
    const sayBye = (name: string) => {
        return `Goodbye ${name}`
    }
    return {sayHello, sayBye}
})()

const user = (() => {
    const modules = {}
    return modules
})()
export default {user, math};
// export default 'hello';

const alesha = {}

export {user, math}

export {alesha}




