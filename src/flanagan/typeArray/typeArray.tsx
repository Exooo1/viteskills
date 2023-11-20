export const TypeArray = () => {
    return <div>
        <h1>This is TypeArray!</h1>
    </div>
}
//Uint8Array 8 битные бинарные числа и т.д
const simpleInt = new Int32Array([122222222, 222222, 2222])
const intArray = Int32Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
const intArray2 = Int32Array.from([12, 3, 4, 5, 6, 10])
const buffer = new ArrayBuffer(1024 * 1024);

console.log(Array.isArray(intArray))
console.log(intArray)
console.log(intArray.buffer)
console.log(intArray2)
console.log(simpleInt)
console.log(buffer)

function Animal() {
}

Animal.prototype.hello = () => {
    console.log('Hello')
}

function Car(name: string) {

}

Car.prototype = Object.create(Animal.prototype)
const bmv = new Car('22')
bmv.hello()
console.log(bmv.constructor instanceof Car)
console.log(bmv)
console.log(bmv.__proto__,'bmv.__proto__')
console.log(Car)
//ts-ignore
Object.prototype.vlas = 'Hello vlas'
const  a = {}
//ts-ignore
console.log(a.vlas)
console.log(a)


// class Animal1 {
// }
//
// Animal.prototype.hello = () => {
//     console.log('Hello')
// }
//
// class Car1 {
//     constructor(s: string) {
//     }
// }
//
// Car1.prototype = Object.create(Animal1.prototype)
// const bmv1 = new Car1('22')
// console.log(bmv1 instanceof Car1)
// console.log(bmv1)
// console.log(Car1)



function Anim(){

}
Anim.prototype.vlas = '222'

function Dog(){

}
Dog.prototype = Object.create(Anim.prototype)
