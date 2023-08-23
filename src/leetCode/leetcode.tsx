export const LeetCode = () => {
    return <section>
        <h1>LeetCode HERE!</h1>
    </section>
}

const sleep = (millis: number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(millis)
        }, millis)
    })
}
sleep(3000).then(console.log)

const counter = (n: number) => {
    let count = n
    return () => {
        return count++
    }
}
const resultCounter = counter(10)
console.log(resultCounter())
console.log(resultCounter())
console.log(resultCounter())
console.log(resultCounter())


const fn = (n: number, i?: number) => {
    if (i !== undefined) return n + i
    return n + 1
}
const eachOverElement = (arr: number[], fn: (n: number, i?: number) => number): number[] => {
    return arr.map(el => fn(el, 10))
}
console.log(eachOverElement([1, 2, 3], fn))
