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

// class Duties {
//     food() {
//         return 'i am eating'
//     }
//
//     sit() {
//         return 'i am sitting'
//     }
// }
//
// class User extends Duties {
//     name: string
//     age: number
//
//     constructor(name: string, age: number) {
//         super()
//         this.name = name
//         this.age = age
//     }
//
//     static tt(s: string) {
//         return `Hello my name is ${this.name}`
//     }
//
//     set setName(name: string) {
//         this.name = name
//     }
//
//     get getName() {
//         return this.name
//     }
//
//     getFullName() {
//         return this.name + this.age
//     }
// }

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


// class Buffer {
//     size = 0
//     #city = 'Bobruisk'
//
//     changeSize(newSize) {
//         this.#city = 'Good'
//         this.size = newSize
//     }
// }
//
// const buf = new Buffer()
// const buf2 = new Buffer()
//
// buf.changeSize = function (newSize) {
//     return this.size = newSize + 5
// }
// buf.changeSize(155)
// buf2.changeSize(155)
// console.log(buf)
// console.log(buf2)
// interface  IUser {
//     age?:number
// }
// class User implements IUser {
//     name:string = 'vlas'
//     static getRandomNumber(){
//         return (Math.random() * 10 * 100).toFixed(2)
//     }
// }
//
// const vlas = new User()
// vlas.age = 22
// console.log(vlas)
// console.log(User.getRandomNumber())

// class Complex {
//     a: number
//     b: number
//
//     static GET_DEFAULT_NAME: number | any = 'Vlad'
//
//     constructor(a, b) {
//         this.a = a
//         this.b = b
//     }
//
//     plus(t, c) {
//         return new Complex(t, c)
//     }
// }
//
//
// const test = new Complex(15, 10)
//
// console.log(test.plus(100, 5).plus(15, 20).plus(1, 2))
// console.log(Complex.GET_DEFAULT_NAME )
// Complex.GET_DEFAULT_NAME = new Complex(2,3).plus(2,4)
// console.log(Complex.GET_DEFAULT_NAME )
//
// class Life {
//     getFood(){
//         return 'got food'
//     }
//
//     getSleep(){
//         return 'got sleep'
//     }
// }
//
// class User extends Life{
//     name: string = ''
//
//     constructor(name) {
//         super()
//         this.name = name
//     }
//
//     getNames() {
//         return this.name
//     }
// }
//
// const vlas = new User('vlas')
// vlas.test = () =>{
//     console.log('Hello friends')
// }
// console.log(vlas)
// Life.prototype.getEat = function (){
//     return 'got Eat'
// }

// Number.prototype.getTime = function (f) {
//     for(let i  = 0;i < this; i++){
//         f(i)
//     }
// }
//
// const t = 2
// t.getTime((i)=>console.log('Hello' + i))

// class EZArray extends Array {
//     get first () { return this[0]; }
//     get last () { return this[this.length-1]; }
// }
// let a = new EZArray () ;
// console.log(a instanceof EZArray)
// console.log(a instanceof Array)
// a.name = 'vlas'
// a.push(1,2,3,4,5)
// console.log(a)
//
// function User (){
//     this.name='vlas'
//     this.getName = function (){
//         console.log('Name')
//     }
// }
// User.prototype.test = function(){
//    console.log(this.name)
// }
//
// const vlas = new User
// vlas.test()

// class ArraySon extends Array {
//     arr:number[]
//     randomNumber:number
//     constructor(arr: number[], randomNumber: number) {
//         if (!Array.isArray(arr)) {
//             throw new Error("It isn't array!")
//         }
//         super()
//         this.arr = arr
//         this.randomNumber = randomNumber
//     }
//
//     set countArray(number){
//         if(!isFinite(number)) throw new Error(" it isn't number!")
//         this.arr.push(number)
//     }
// }
//
// const a = new ArraySon([],20)
// a.push(23)
// a.countArray = 'asqw'
// console.log(a)

// class AdditionalUser {
//     prefer?: string = "default"
//
//     constructor(prefer?: string) {
//         this.prefer = prefer || this.prefer
//     }
//
//     getPrefer() {
//         return `I prefer eat ${this.prefer}`
//     }
//
//     getListPrefer(something?: string) {
//         return 'Chicken, Pig, Banana, Cherry ' + something || ''
//     }
//
//     getFavourite() {
//         return 'Макароны, доширак, Бульон'
//     }
// }
//
// class User extends AdditionalUser {
//     name: string
//
//     constructor(name: string) {
//         super();
//         this.name = name
//     }
//
//     arrowFunction = () => {
//         return 1
//     }
//
//     getListPrefer(value?: string): string {
//         return super.getListPrefer(`Chocolate, Apple, ${value ?? ''}`) + super.getPrefer()
//     }
//
//     getFavourite(): string {
//         return 'Бульон, Сникерс';
//     }
// }
//
// class Test {
//
// }
//
// const vlas = new User('Vlas')
// const diana = new User('Diana')
//
// console.log(vlas)
// console.log(vlas.getPrefer())
// console.log(vlas.getListPrefer())
// console.log(diana.getListPrefer('gamarjoba'))
// console.log(vlas.getFavourite())

class Life {
    eat() {
        return 'eating'
    }

    run() {
        return 'running'
    }

    sleep() {
        throw new Error('Realize your method sleep!')
    }
}

class Person extends Life {
    name: string

    constructor(name:string) {
        super();
        this.name = name
    }

    sleep() {
        return 'i have deep dream'
    }

    toString(){
        return super.run() + super.eat() + this.sleep()
    }
}

const diana = new Person('Diana')
console.log(diana)
console.log(diana.toString())
console.log(diana.eat())
console.log(diana.run())
console.log(diana.sleep())
