export const Generators = () => {
    return <div>
        <h1>This is Generators!</h1>
        <div style={{background: 'red', height: '300px', width: '300px', zIndex: 1000, position:'static'}}>
            <div style={{background: 'purple', height: '150px', width: '150px', zIndex: 15, position: 'absolute'}}></div>
            <div style={{
                background: 'yellowgreen', height: '75px', width: '75px', zIndex: 11,
                position: 'relative', top: '-15px'
            }}>
            </div>
        </div>
    </div>
}

function* simpleGenerator() {
    console.log('hello')
    yield  1;
    console.log('hello1')
    yield  2;
    return 'done'
    yield  3;
    console.log('hello3')
    yield  4;
    return
}

const generator = simpleGenerator()
const one = generator.next()
console.log(one)
const two = generator.next()
console.log(two)
const three = generator.next()
console.log(three)
const four = generator.next()
console.log(four)
// const five = generator.next()
// console.log(five)
//
// console.log(generator)
// for (let g of generator) {
//     console.log(g)
// }
// const result = [...generator]
// console.log(result)

