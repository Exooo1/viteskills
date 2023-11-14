import axios from "axios";

export const SetMap = () => {
    return <div>
        <h1>This is Set and Map!</h1>
    </div>
}
// const testSet = new Set([1,2,3,4,5,6])
// const citySet = new Set<any>([testSet])
// citySet.add('Bobruisk')
// citySet.add('Minsk')
// citySet.add('Jlobin')
// citySet.add('Jlobin')
// citySet.add('Mississippi')
// console.log(citySet)
//
// console.log(citySet.has('Bobruisk'))
// console.log(citySet.entries().next()) // Bobruisk' => 'Bobruisk',
// console.log(citySet.delete('Bobruisk')) // delete elem
// console.log(citySet.clear()) // clean all
// console.log(citySet.values().next()) // function generator
// citySet.forEach((el, i, arr) => console.log(el, i))
//
// const setMississippi = new Set<any>("Mississippi")
// setMississippi.add([123,4,8,5,6,7]).add('Alesha')
// setMississippi.add({})
// setMississippi.add({})
// setMississippi.add({})
// setMississippi.add({})
// console.log(setMississippi.delete('Alesha')) // return true
// console.log(setMississippi.delete({})) // return false
// console.log(setMississippi.has('M'))
// console.log(setMississippi.keys().next())
// setMississippi.forEach(el=>{
//     if(typeof el === 'object'){
//         setMississippi.delete(el)
//     }
// })
// console.log(setMississippi)
//
// const a = new Set()
// a.add(23).add(24)

const o = {
    a: 2,
    b: 'b'
}

let map = new Map<number | string, (string | number)>(Object.entries(o));
map.set(1, 'one')
map.set(1, 'one')
map.set(1, 'one')
map.set(2, 'two')
map.set(3, 'three').set('some', 25)
console.log(map)
console.log(map.get(1))
console.log(map.has('b'))
console.log(map.delete('a'))
console.log(map.size)

const testMap = new Map([[1, 2]])
console.log(testMap)
console.log(...testMap)
for (let [v, b] of map) {
    console.log(`this is ${v} and ${b}`)
}

console.log(map.entries())
console.log(map.values())
console.log(...map.keys())
const t = String(...map.keys())
console.log(t)
console.log(typeof t)
console.log(map.forEach(el => el))

const user = {
    age: 25,
    name: 'vlas'
}

const newMap = new Map([...Object.entries(user)])
console.log(newMap)
