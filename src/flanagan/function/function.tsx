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


const recursia = (n: number) => {
    if (n < 10) return recursia(n + 1)
    else return n
}
console.log(recursia(1))


const constfunc = (v: any) => {
    return () => {
        return v
    }
}

let array = []
for (let i = 0; i < 10; i++) {
    array[i] = constfunc(i)()
}

console.log(array)

// console.log(array[3]())
// console.log(array[5]())
//
// let array = []
// for (var i = 0; i < 10; i++) {
//     array[i] = () => i
// }
//
// console.log(array[3]())
// console.log(array[5]())

const user1 = {
    name: 'vlas',
    returnName() {
        const returnN = () => {
            return this.name
        }
        return returnN()
    },
}

console.log(user1.returnName())

const func2 = (name: string, age: 22, ...rest: any) => {

}
console.log(func2.length)

function f(a, b, c) {
    console.log('This is ABC', a, b, c)
    return this.name
}

const user2 = {
    name: 'vlasik',
    m() {
        return this.name
    }
}
console.log(user2.m())
// user2.m = f
console.log(user2.m())
console.log(f.bind(user2, 4, 3, 2)())
console.log(f.apply(user2, [7, 6, 5]))
console.log(f.call(user2, 10, 11, 12))

const func3 = (x: number, y: number) => {
    return x + y
}

const result = func3.bind(null, 5)
console.log(result(10))
console.log(result(11))

const user3 = {
    age: 25,

    getName() {
        this.age = this.age + 10
        return this
    },

    setName() {
        return this
    }
}

console.log(user3.getName().age)

const func5 = (f: (i: number) => number, x: number) => {
    const arr = [1, 2, 3, 4, 5, 6]
    return arr.map(el => f(el) + x)
}
console.log(func5((i: number) => {
    return i * i
}, 10))

const cary = (a) => {
    return (b) => {
        const result = a ** a + b ** b
        return (c) => {
            return result * c
        }
    }
}

console.log(cary(10)(20)(30))
