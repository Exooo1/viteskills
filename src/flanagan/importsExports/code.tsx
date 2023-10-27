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
// export default {user, math};
export default 'Csss';

const alesha = {}

//ТАК НЕЛЬЗЯ ДЕЛАТЬ!
// const test = () =>{
//     const t = 2
//     export {t}
// }

export {user, math}

export {alesha}
const a: any = '2'
export {a}




