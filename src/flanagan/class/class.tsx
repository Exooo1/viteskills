export const Class = () => {
    return <section>
        <h1>Class is here!</h1>
    </section>
}
//
// const user = {
//     name: 'default',
//     age: 'default'
// }
//
// const createUser = (name, age?: number) => {
//     const newUser = Object.create(user)
//     newUser.name = name
//     if (age) newUser.age = age
//     return newUser
// }
//
// const diana = createUser('Diana')
// console.log(diana.age)
//
// function f() {
//     console.log(this)
// }
//
// f.range = {
//     age: 25
// }
// console.log(f.range)
//
// function Range(form, to) {
//     if (!new.target) return new Range(form, to)
//     this["form"] = form
//     this["to"] = to
//     this["good"] = function (){
//         return 'hood'
//     }
// }
//
// Range.prototype = {
//     getRange() {
//         return this.form + this.to
//     }
// }
// // const test = new Range(15, 30)
// const test = Object.create(new Range(15,30))
// test.form = 55
//
// console.log(test,'test')
//
// const n = Range(66, 70)
// console.log(n)
//
// class User {
//     name: string = ''
//     age: number = 0
//
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//
//     getInformation() {
//         return this.name + this.age
//     }
//
//     test = () => {
//         return this.name + this.age + 'Hello'
//     }
// }
//
// const vlas = new User('vlas', 25)
// console.log(vlas.test())
// console.log(vlas)
//
// // будет true
// const testt = Object.create(test)
// console.log(testt instanceof Range)
// console.log(testt)
//
// function Strange() {}
// Strange.prototype = Range.prototype;
// console.log(new Strange () instanceof Range)
//
// function range1(){
//
// }
// range1.methods = {
//     hello:'vlas'
// }
//
//
// const user1 = {
//     name:'vlas'
// }
// const user2 = user1
//
// console.log(user1.isPrototypeOf(user2))
//
// let F = function () {}
// let i = F.prototype
// let c = i.constructor
// c === F

class Duties {
    food() {
        return 'i am eating'
    }

    sit() {
        return 'i am sitting'
    }
}

class User extends Duties {
    name: string
    age: number

    constructor(name: string, age: number) {
        super()
        this.name = name
        this.age = age
    }

    static tt(s: string) {
        return `Hello my name is ${this.name}`
    }

    set setName(name: string) {
        this.name = name
    }

    get getName() {
        return this.name
    }

    getFullName() {
        return this.name + this.age
    }
}

// const diana = new User('diana', 22)
//
// console.log(diana)
// console.log(User.tt('Good'))
// console.log(User.tt('Good'))
// console.log(new User('vlas',25).name)
//
// console.log( new B('Denis'))
// function B (name){
//     this.name = name
// }
//
// const test = new Function('a', 'b', 'return a + b');
// const result = test(5, 5);


class Buffer {
    size = 0
    #city = 'Bobruisk'

    changeSize(newSize) {
        this.#city = 'Good'
        this.size = newSize
    }
}

const buf = new Buffer()
const buf2 = new Buffer()

buf.changeSize = function (newSize) {
    return this.size = newSize + 5
}
buf.changeSize(155)
buf2.changeSize(155)
console.log(buf)
console.log(buf2)


