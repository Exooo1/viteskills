export const Function = () => {
    return <section>
        <h1>Hello Function</h1>
    </section>
}

const objectCopy = ({name = 'Vlas'}) => {
    return name
}

const objectRest = ({name, ...rest}: { name: string, age: number, city: string }) => {
    return rest
}

console.log(objectRest({name: 'vlas', age: 22, city: 'Bobruisk'}))

const arr = [(x: number) => x * x]
console.log(arr[0](15))

const variableFunc = () => {
    console.log(variableFunc.city)
}
variableFunc.city = 'Minsk'
variableFunc()

//Замыкание

const checkScope = () => {
    const scope = 'scope'

    function f() {
        return scope
    }

    return f
}

const checkScope2 = checkScope()
console.log(checkScope2())

const counter = (n: number) => {
    return {
        get count() {
            return n++
        },
        set count(m) {
            n = m
        }
    }
}

const count = counter(15)
console.log(count.count)
console.log(count.count)
console.log(count.count = 20)
console.log(count.count)
console.log(count.count)


const zam = (name: string, age: number) => {
    return {
        name: name,
        city: 'Minsk',
        age: age,
        happyBirthday() {
            this.age++
        }
    }
}

const user = zam('Oleg', 53)
console.log(user.age)
user.happyBirthday()
user.happyBirthday()
user.happyBirthday()
console.log(user.age)


const recursia = (n:number) =>{
    if(n<10) return recursia(n+1)
    else return n
}
console.log(recursia(1))
