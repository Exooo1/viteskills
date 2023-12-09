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

// const tq = bytes.slice(0, 5) //не будет делить память вместе с основным
// tq[2] = 200
// console.log(tq)
// console.log(bytes)

console.log(bytes.BYTES_PER_ELEMENT, bytes.length)

// const tq = bytes.subarray(0,5) //будет делить память вместе с основным
// tq[2] = 200
// console.log(tq)
// console.log(bytes)

let bytes1 = new Uint8Array(8);
bytes1[0] = 1;
bytes1[1] = 10;
bytes1.buffer[0]
bytes1.buffer[1] = 255;
bytes1.buffer['some'] = 255;
console.log(bytes1)

const newArrayBuffer = new ArrayBuffer(10)
newArrayBuffer[0] = 9000000000
newArrayBuffer[1] = 9000000000
newArrayBuffer[2] = 9000000000
newArrayBuffer[3] = 9000000000
newArrayBuffer[4] = 9000000000
newArrayBuffer[5] = 9000000000
newArrayBuffer[6] = 9000000000
newArrayBuffer[7] = 9000000000
newArrayBuffer[8] = 9000000000
newArrayBuffer[9] = 9000000000
newArrayBuffer[10] = 9000000000
newArrayBuffer[11] = 9000000000
newArrayBuffer[12] = 9000000000

const newArrayBuffer1 = new Int8Array(5)
newArrayBuffer1[0] = -37
console.log(newArrayBuffer1)


const bufferы = new ArrayBuffer(2);
bufferы[0] =3
bufferы[1]=3
bufferы[2]=3
console.log(bufferы)
const dataView = new DataView(bufferы);
dataView.setUint8(0, 155);
dataView.setUint8(1, 22);
const value = dataView.getUint8(0);
const value2 = dataView.getUint8(1);
console.log(value,value2);
console.log(dataView);
