export const Class = () => {
    return <section>
        <h1>Class is here!</h1>
    </section>
}

const user = {
    name: 'default',
    age: 'default'
}

const createUser = (name, age?: number) => {
    const newUser = Object.create(user)
    newUser.name = name
    if (age) newUser.age = age
    return newUser
}

const diana = createUser('Diana')
console.log(diana.age)

function f() {
    console.log(this)
}

f.range = {
    age: 25
}
console.log(f.range)

function Range(form, to) {
    if (!new.target) return new Range(form, to)
    this["form"] = form
    this["to"] = to
}

Range.prototype = {
    getRange() {
        return this.form + this.to
    }
}
const test = new Range(15, 30)
console.log(test.getRange())

const n = Range(66, 70)
console.log(n)

class User {
    name: string = ''
    age: number = 0

    constructor(name, age) {
        this.name = name
        this.age = age
    }

    getInformation() {
        return this.name + this.age
    }

    test = () => {
        return this.name + this.age + 'Hello'
    }
}

const vlas = new User('vlas', 25)
console.log(vlas.test())

