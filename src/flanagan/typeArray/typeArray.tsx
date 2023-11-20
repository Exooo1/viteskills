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

for (let el of intArray) {
    console.log(el)
}

const bytes = new Uint8Array(20)

bytes.set(intArray2, intArray2.length)
console.log(bytes)
const t = bytes.subarray(3, 7)
t[2] = 100
console.log(t)
console.log(bytes)
console.log(bytes.subarray(3, 7)) // вырзает массив с begin - end
